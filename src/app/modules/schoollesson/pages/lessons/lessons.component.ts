import { Component } from '@angular/core';
import { AlertService, CoreService, CrudComponent } from 'wacom';
import { SchoollessonService } from '../../services/schoollesson.service';
import { Schoollesson } from '../../interfaces/schoollesson.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { schoollessonFormComponents } from '../../formcomponents/schoollesson.formcomponents';
import { Router } from '@angular/router';
import { UserService } from 'src/app/modules/user/services/user.service';

@Component({
	templateUrl: './lessons.component.html',
	styleUrls: ['./lessons.component.scss'],
	standalone: false
})
export class LessonsComponent extends CrudComponent<
	SchoollessonService,
	Schoollesson
> {
	override get rows(): Schoollesson[] {
		return this.course
			? this._schoollessonService.schoollessonsByCourse[this.course]
			: this._schoollessonService.schoollessonsByAuthor[
					this._us.user._id
			  ];
	}

	get hasAccess(): boolean {
		return (
			this._us.role('admin') ||
			this._us.role('schoolowner') ||
			this._us.role('schoolteacher')
		);
	}

	override columns = ['name'];

	course = this._router.url.includes('/lessons/')
		? this._router.url.split('/')[this._router.url.split('/').length - 1]
		: '';

	form: FormInterface = this._form.getForm(
		'schoollesson',
		schoollessonFormComponents
	);

	config = {
		create: this.hasAccess
			? (): void => {
					this._form.modal<Schoollesson>(this.form, {
						label: 'Create',
						click: (created: unknown, close: () => void) => {
							this.preCreate(created as Schoollesson);

							this._schoollessonService.create(
								created as Schoollesson
							);

							close();
						}
					});
			  }
			: null,
		update: this.hasAccess
			? (doc: Schoollesson): void => {
					this._form
						.modal<Schoollesson>(this.form, [], doc)
						.then((updated: Schoollesson) => {
							this._core.copy(updated, doc);

							this._schoollessonService.update(doc);
						});
			  }
			: null,
		delete: this.hasAccess
			? (doc: Schoollesson): void => {
					this._alert.question({
						text: this._translate.translate(
							'Common.Are you sure you want to delete this schoollesson?'
						),
						buttons: [
							{
								text: this._translate.translate('Common.No')
							},
							{
								text: this._translate.translate('Common.Yes'),
								callback: (): void => {
									this._schoollessonService.delete(doc);
								}
							}
						]
					});
			  }
			: null,
		buttons: [
			this.hasAccess
				? {
						icon: 'arrow_upward',
						click: (doc: Schoollesson): void => {
							const index = this.rows.findIndex(
								(d) => d._id === doc._id
							);

							if (index) {
								this.rows.splice(index, 1);

								this.rows.splice(index - 1, 0, doc);
							}

							for (let i = 0; i < this.rows.length; i++) {
								if (this.rows[i].order !== i) {
									this.rows[i].order = i;

									this._schoollessonService.update(
										this.rows[i]
									);
								}
							}
						}
				  }
				: null,
			this.hasAccess
				? {
						icon: 'cloud_download',
						click: (doc: Schoollesson): void => {
							this._form.modalUnique<Schoollesson>(
								'schoollesson',
								'url',
								doc
							);
						}
				  }
				: null,
			{
				icon: 'assignment',
				hrefFunc: (doc: Schoollesson) =>
					this._roleUrl() + 'tests/lesson/' + doc._id
			}
		],
		headerButtons: [
			this.hasAccess
				? {
						icon: 'playlist_add',
						click: this.bulkManagement(),
						class: 'playlist'
				  }
				: null,
			this.hasAccess
				? {
						icon: 'edit_note',
						click: this.bulkManagement(false),
						class: 'edit'
				  }
				: null
		]
	};

	constructor(
		private _schoollessonService: SchoollessonService,
		private _translate: TranslateService,
		private _alert: AlertService,
		private _form: FormService,
		private _core: CoreService,
		private _router: Router,
		private _us: UserService
	) {
		super(_schoollessonService, _core, _form);
	}

	override preCreate(schoollesson: Schoollesson): void {
		delete schoollesson.__created;

		if (this.course) {
			schoollesson.course = this.course;
		}
	}

	private _roleUrl(): string {
		return this._us.role('admin')
			? '/admin/'
			: this._us.role('schoolowner')
			? '/owner/'
			: this._us.role('schoolteacher')
			? '/teacher/'
			: '/';
	}
}
