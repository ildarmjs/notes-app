import { Note } from "./types.db"

export interface INotesContext {
	notes: Note[]
	addNote: (title: string, content: string) => Promise<void>
	deleteNote: (id: number) => Promise<void>
	updateNote: (id: number, content: string, title: string) => Promise<void>
	searchNotes: (query: string) => Note[]
	selectedNoteId: number | null
	setSelectedNoteId: (p: number | null) => void
	editTitle: string
	setEditTitle: (str: string) => void
	editContent: string
	setEditContent: (str: string) => void
	searchQuery: string
	setSearchQuery: (str: string) => void
	isEditing: boolean
	setIsEditing: (bol: boolean) => void
}