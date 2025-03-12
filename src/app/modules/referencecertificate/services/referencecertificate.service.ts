import { Injectable } from '@angular/core';
import { Referencecertificate } from '../interfaces/referencecertificate.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root'
})
export class ReferencecertificateService extends CrudService<Referencecertificate> {
	constructor() {
		super({
			name: 'referencecertificate'
		});
	}
}
