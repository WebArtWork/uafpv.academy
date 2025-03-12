import { Component } from '@angular/core';
import { AlertService, CoreService } from 'wacom';
import { SupplierService } from '../../services/supplier.service';
import { Supplier } from '../../interfaces/supplier.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { supplierFormComponents } from '../../formcomponents/supplier.formcomponents';

@Component({
	templateUrl: './suppliers.component.html',
	styleUrls: ['./suppliers.component.scss'],
	standalone: false
})
export class SuppliersComponent {
	columns = ['name', 'city', 'phone', 'price', 'website'];

	form: FormInterface = this._form.getForm(
		'supplier',
		supplierFormComponents
	);

	config = {
		create: (): void => {
			this._form.modal<Supplier>(this.form, {
				label: 'Create',
				click: (created: unknown, close: () => void) => {
					this._preCreate(created as Supplier);

					this._supplierService.create(created as Supplier);

					close();
				}
			});
		},
		update: (doc: Supplier): void => {
			this._form
				.modal<Supplier>(this.form, [], doc)
				.then((updated: Supplier) => {
					this._core.copy(updated, doc);

					this._supplierService.update(doc);
				});
		},
		delete: (doc: Supplier): void => {
			this._alert.question({
				text: this._translate.translate(
					'Common.Are you sure you want to delete this supplier?'
				),
				buttons: [
					{
						text: this._translate.translate('Common.No')
					},
					{
						text: this._translate.translate('Common.Yes'),
						callback: (): void => {
							this._supplierService.delete(doc);
						}
					}
				]
			});
		},
		buttons: [
			{
				icon: 'cloud_download',
				click: (doc: Supplier): void => {
					this._form.modalUnique<Supplier>('supplier', 'url', doc);
				}
			}
		],
		headerButtons: [
			{
				icon: 'playlist_add',
				click: this._bulkManagement(),
				class: 'playlist'
			},
			{
				icon: 'edit_note',
				click: this._bulkManagement(false),
				class: 'edit'
			}
		]
	};

	get rows(): Supplier[] {
		return this._supplierService.suppliers;
	}

	constructor(
		private _translate: TranslateService,
		private _supplierService: SupplierService,
		private _alert: AlertService,
		private _form: FormService,
		private _core: CoreService
	) {}

	private _bulkManagement(create = true): () => void {
		return (): void => {
			this._form
				.modalDocs<Supplier>(create ? [] : this.rows)
				.then((suppliers: Supplier[]) => {
					if (create) {
						for (const supplier of suppliers) {
							this._preCreate(supplier);

							this._supplierService.create(supplier);
						}
					} else {
						for (const supplier of this.rows) {
							if (
								!suppliers.find(
									(localSupplier) =>
										localSupplier._id === supplier._id
								)
							) {
								this._supplierService.delete(supplier);
							}
						}

						for (const supplier of suppliers) {
							const localSupplier = this.rows.find(
								(localSupplier) =>
									localSupplier._id === supplier._id
							);

							if (localSupplier) {
								this._core.copy(supplier, localSupplier);

								this._supplierService.update(localSupplier);
							} else {
								this._preCreate(supplier);

								this._supplierService.create(supplier);
							}
						}
					}
				});
		};
	}

	private _preCreate(supplier: Supplier): void {
		delete supplier.__created;
	}
}
