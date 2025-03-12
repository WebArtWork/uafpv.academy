import { CrudDocument } from 'wacom';

export interface Supplier extends CrudDocument {
	name: string;
	description: string;
}
