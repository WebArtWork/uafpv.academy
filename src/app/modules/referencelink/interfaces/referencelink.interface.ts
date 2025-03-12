import { CrudDocument } from 'wacom';

export interface Referencelink extends CrudDocument {
	name: string;
	description: string;
}
