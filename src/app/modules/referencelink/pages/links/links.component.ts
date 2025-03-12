import { Component } from '@angular/core';
import { AlertService, CoreService } from 'wacom';
import { ReferencelinkService } from '../../services/referencelink.service';
import { Referencelink } from '../../interfaces/referencelink.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { referencelinkFormComponents } from '../../formcomponents/referencelink.formcomponents';
import { firstValueFrom } from 'rxjs';

@Component({
	templateUrl: './links.component.html',
	styleUrls: ['./links.component.scss'],
	standalone: false,
})
export class LinksComponent {
	columns = ['name', 'description'];

	form: FormInterface = this._form.getForm('referencelink', referencelinkFormComponents);

	config = {
		paginate: this.setRows.bind(this),
		perPage: 20,
		setPerPage: this._referencelinkService.setPerPage.bind(this._referencelinkService),
		allDocs: false,
		create: (): void => {
			this._form.modal<Referencelink>(this.form, {
				label: 'Create',
				click: async (created: unknown, close: () => void) => {
					close();

					this._preCreate(created as Referencelink);

					await firstValueFrom(
						this._referencelinkService.create(created as Referencelink)
					);

					this.setRows();
				},
			});
		},
		update: (doc: Referencelink): void => {
			this._form
				.modal<Referencelink>(this.form, [], doc)
				.then((updated: Referencelink) => {
					this._core.copy(updated, doc);

					this._referencelinkService.update(doc);
				});
		},
		delete: (doc: Referencelink): void => {
			this._alert.question({
				text: this._translate.translate(
					'Common.Are you sure you want to delete this referencelink?'
				),
				buttons: [
					{
						text: this._translate.translate('Common.No'),
					},
					{
						text: this._translate.translate('Common.Yes'),
						callback: async (): Promise<void> => {
							await firstValueFrom(this._referencelinkService.delete(doc));

							this.setRows();
						},
					},
				],
			});
		},
		buttons: [
			{
				icon: 'cloud_download',
				click: (doc: Referencelink): void => {
					this._form.modalUnique<Referencelink>('referencelink', 'url', doc);
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

	rows: Referencelink[] = [];

	constructor(
		private _translate: TranslateService,
		private _referencelinkService: ReferencelinkService,
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
				this._referencelinkService.get({ page }).subscribe((rows) => {
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
				.modalDocs<Referencelink>(create ? [] : this.rows)
				.then(async (referencelinks: Referencelink[]) => {
					if (create) {
						for (const referencelink of referencelinks) {
							this._preCreate(referencelink);

							await firstValueFrom(
								this._referencelinkService.create(referencelink)
							);
						}
					} else {
						for (const referencelink of this.rows) {
							if (
								!referencelinks.find(
									(localReferencelink) => localReferencelink._id === referencelink._id
								)
							) {
								await firstValueFrom(
									this._referencelinkService.delete(referencelink)
								);
							}
						}

						for (const referencelink of referencelinks) {
							const localReferencelink = this.rows.find(
								(localReferencelink) => localReferencelink._id === referencelink._id
							);

							if (localReferencelink) {
								this._core.copy(referencelink, localReferencelink);

								await firstValueFrom(
									this._referencelinkService.update(localReferencelink)
								);
							} else {
								this._preCreate(referencelink);

								await firstValueFrom(
									this._referencelinkService.create(referencelink)
								);
							}
						}
					}

					this.setRows();
				});
		};
	}

	private _preCreate(referencelink: Referencelink): void {
		delete referencelink.__created;
	}
}
