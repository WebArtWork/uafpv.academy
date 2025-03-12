import { CrudDocument } from 'wacom';

export interface Reference extends CrudDocument {
	name: string;
	description: string;
}
