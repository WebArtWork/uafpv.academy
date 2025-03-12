import { Injectable } from '@angular/core';
import { Supplier } from '../interfaces/supplier.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class SupplierService extends CrudService<Supplier> {
	suppliers: Supplier[] = this.getDocs();

	suppliersByAuthor: Record<string, Supplier[]> = {};

	constructor() {
		super({
			name: 'supplier',
		});

		this.get();

		this.filteredDocuments(this.suppliersByAuthor);
	}
}
