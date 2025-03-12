import { Component } from '@angular/core';
import { AlertService, CoreService } from 'wacom';
import { ReferencecertificateService } from '../../services/referencecertificate.service';
import { Referencecertificate } from '../../interfaces/referencecertificate.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { referencecertificateFormComponents } from '../../formcomponents/referencecertificate.formcomponents';
import { firstValueFrom } from 'rxjs';

@Component({
	templateUrl: './certificates.component.html',
	styleUrls: ['./certificates.component.scss'],
	standalone: false,
})
export class CertificatesComponent {
	columns = ['name', 'description'];

	form: FormInterface = this._form.getForm('referencecertificate', referencecertificateFormComponents);

	config = {
		paginate: this.setRows.bind(this),
		perPage: 20,
		setPerPage: this._referencecertificateService.setPerPage.bind(this._referencecertificateService),
		allDocs: false,
		create: (): void => {
			this._form.modal<Referencecertificate>(this.form, {
				label: 'Create',
				click: async (created: unknown, close: () => void) => {
					close();

					this._preCreate(created as Referencecertificate);

					await firstValueFrom(
						this._referencecertificateService.create(created as Referencecertificate)
					);

					this.setRows();
				},
			});
		},
		update: (doc: Referencecertificate): void => {
			this._form
				.modal<Referencecertificate>(this.form, [], doc)
				.then((updated: Referencecertificate) => {
					this._core.copy(updated, doc);

					this._referencecertificateService.update(doc);
				});
		},
		delete: (doc: Referencecertificate): void => {
			this._alert.question({
				text: this._translate.translate(
					'Common.Are you sure you want to delete this referencecertificate?'
				),
				buttons: [
					{
						text: this._translate.translate('Common.No'),
					},
					{
						text: this._translate.translate('Common.Yes'),
						callback: async (): Promise<void> => {
							await firstValueFrom(this._referencecertificateService.delete(doc));

							this.setRows();
						},
					},
				],
			});
		},
		buttons: [
			{
				icon: 'cloud_download',
				click: (doc: Referencecertificate): void => {
					this._form.modalUnique<Referencecertificate>('referencecertificate', 'url', doc);
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

	rows: Referencecertificate[] = [];

	constructor(
		private _translate: TranslateService,
		private _referencecertificateService: ReferencecertificateService,
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
				this._referencecertificateService.get({ page }).subscribe((rows) => {
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
				.modalDocs<Referencecertificate>(create ? [] : this.rows)
				.then(async (referencecertificates: Referencecertificate[]) => {
					if (create) {
						for (const referencecertificate of referencecertificates) {
							this._preCreate(referencecertificate);

							await firstValueFrom(
								this._referencecertificateService.create(referencecertificate)
							);
						}
					} else {
						for (const referencecertificate of this.rows) {
							if (
								!referencecertificates.find(
									(localReferencecertificate) => localReferencecertificate._id === referencecertificate._id
								)
							) {
								await firstValueFrom(
									this._referencecertificateService.delete(referencecertificate)
								);
							}
						}

						for (const referencecertificate of referencecertificates) {
							const localReferencecertificate = this.rows.find(
								(localReferencecertificate) => localReferencecertificate._id === referencecertificate._id
							);

							if (localReferencecertificate) {
								this._core.copy(referencecertificate, localReferencecertificate);

								await firstValueFrom(
									this._referencecertificateService.update(localReferencecertificate)
								);
							} else {
								this._preCreate(referencecertificate);

								await firstValueFrom(
									this._referencecertificateService.create(referencecertificate)
								);
							}
						}
					}

					this.setRows();
				});
		};
	}

	private _preCreate(referencecertificate: Referencecertificate): void {
		delete referencecertificate.__created;
	}
}
