import { Injectable } from '@angular/core';
import { Referencelink } from '../interfaces/referencelink.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root'
})
export class ReferencelinkService extends CrudService<Referencelink> {
	constructor() {
		super({
			name: 'referencelink'
		});
	}
}
