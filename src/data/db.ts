import Dexie, { Table } from 'dexie';
import { Note } from '../types/types.db';



export class NotesDatabase extends Dexie {
	notes!: Table<Note>;

	constructor() {
		super('NotesDatabase');
		this.version(1).stores({
			notes: '++id, title, content', // Увеличивающийся id и индексы
		});
	}
}

export const db = new NotesDatabase();