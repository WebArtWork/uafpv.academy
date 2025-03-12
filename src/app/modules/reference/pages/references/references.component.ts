import { Component } from '@angular/core';
import { AlertService, CoreService } from 'wacom';
import { ReferenceService } from '../../services/reference.service';
import { Reference } from '../../interfaces/reference.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { referenceFormComponents } from '../../formcomponents/reference.formcomponents';
import { firstValueFrom } from 'rxjs';

@Component({
	templateUrl: './references.component.html',
	styleUrls: ['./references.component.scss'],
	standalone: false,
})
export class ReferencesComponent {
	columns = ['name', 'description'];

	form: FormInterface = this._form.getForm('reference', referenceFormComponents);

	config = {
		paginate: this.setRows.bind(this),
		perPage: 20,
		setPerPage: this._referenceService.setPerPage.bind(this._referenceService),
		allDocs: false,
		create: (): void => {
			this._form.modal<Reference>(this.form, {
				label: 'Create',
				click: async (created: unknown, close: () => void) => {
					close();

					this._preCreate(created as Reference);

					await firstValueFrom(
						this._referenceService.create(created as Reference)
					);

					this.setRows();
				},
			});
		},
		update: (doc: Reference): void => {
			this._form
				.modal<Reference>(this.form, [], doc)
				.then((updated: Reference) => {
					this._core.copy(updated, doc);

					this._referenceService.update(doc);
				});
		},
		delete: (doc: Reference): void => {
			this._alert.question({
				text: this._translate.translate(
					'Common.Are you sure you want to delete this reference?'
				),
				buttons: [
					{
						text: this._translate.translate('Common.No'),
					},
					{
						text: this._translate.translate('Common.Yes'),
						callback: async (): Promise<void> => {
							await firstValueFrom(this._referenceService.delete(doc));

							this.setRows();
						},
					},
				],
			});
		},
		buttons: [
			{
				icon: 'cloud_download',
				click: (doc: Reference): void => {
					this._form.modalUnique<Reference>('reference', 'url', doc);
				},
			},
		],
		headerButtons: [
			{
				icon: 'playlist_add',
				click: this._bulkManagement(),
				class: 'playlist',
			},
			{
				icon: 'edit_note',
				click: this._bulkManagement(false),
				class: 'edit',
			},
		],
	};

	rows: Reference[] = [];

	constructor(
		private _translate: TranslateService,
		private _referenceService: ReferenceService,
		private _alert: AlertService,
		private _form: FormService,
		private _core: CoreService
	) {
		this.setRows();
	}

	setRows(page = this._page): void {
		this._page = page;

		this._core.afterWhile(
			this,
			() => {
				this._referenceService.get({ page }).subscribe((rows) => {
					this.rows.splice(0, this.rows.length);

					this.rows.push(...rows);
				});
			},
			250
		);
	}

	private _page = 1;

	private _bulkManagement(create = true): () => void {
		return (): void => {
			this._form
				.modalDocs<Reference>(create ? [] : this.rows)
				.then(async (references: Reference[]) => {
					if (create) {
						for (const reference of references) {
							this._preCreate(reference);

							await firstValueFrom(
								this._referenceService.create(reference)
							);
						}
					} else {
						for (const reference of this.rows) {
							if (
								!references.find(
									(localReference) => localReference._id === reference._id
								)
							) {
								await firstValueFrom(
									this._referenceService.delete(reference)
								);
							}
						}

						for (const reference of references) {
							const localReference = this.rows.find(
								(localReference) => localReference._id === reference._id
							);

							if (localReference) {
								this._core.copy(reference, localReference);

								await firstValueFrom(
									this._referenceService.update(localReference)
								);
							} else {
								this._preCreate(reference);

								await firstValueFrom(
									this._referenceService.create(reference)
								);
							}
						}
					}

					this.setRows();
				});
		};
	}

	private _preCreate(reference: Reference): void {
		delete reference.__created;
	}
}
