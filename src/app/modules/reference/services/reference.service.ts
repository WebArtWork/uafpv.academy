import { Injectable } from '@angular/core';
import { Reference } from '../interfaces/reference.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root'
})
export class ReferenceService extends CrudService<Reference> {
	constructor() {
		super({
			name: 'reference'
		});
	}
}
