import React, { createContext, useContext, useEffect, useState } from 'react'
import { db } from '../data/db'
import { INotesContext } from '../types/types.notes'
import { Note } from '../types/types.db'

const NotesContext = createContext<INotesContext | undefined>(undefined)

export const NotesProvider: React.FC<{ children: React.ReactNode }> = ({
	children
}) => {
	const [notes, setNotes] = useState<Note[]>([])
	const [selectedNoteId, setSelectedNoteId] = useState<number | null>(null)
	const [editContent, setEditContent] = useState('')
	const [editTitle, setEditTitle] = useState('')
	const [searchQuery, setSearchQuery] = useState('')
	const [isEditing, setIsEditing] = useState(false)

	const fetchNotes = async () => {
		const allNotes = await db.notes.toArray()
		setNotes(allNotes)
	}

	useEffect(() => {
		fetchNotes()
	}, [])

	const addNote = async (title: string, content: string) => {
		const id = await db.notes.add({ title, content })
		setNotes(prevNotes => [...prevNotes, { id, title, content }])
	}

	const deleteNote = async (id: number) => {
		await db.notes.delete(id)
		setNotes(prevNotes => prevNotes.filter(note => note.id !== id))
	}

	const updateNote = async (id: number, content: string, title: string) => {
		await db.notes.update(id, { content, title })
		setNotes(prevNotes =>
			prevNotes.map(note =>
				note.id === id ? { ...note, content, title } : note
			)
		)
	}

	const searchNotes = (query: string) => {
		return notes.filter(
			note => note.title.includes(query) || note.content.includes(query)
		)
	}

	return (
		<NotesContext.Provider
			value={{
				notes,
				addNote,
				deleteNote,
				updateNote,
				searchNotes,
				selectedNoteId,
				setSelectedNoteId,
				editTitle,
				setEditTitle,
				editContent,
				setEditContent,
				searchQuery,
				setSearchQuery,
				isEditing,
				setIsEditing
			}}
		>
			{children}
		</NotesContext.Provider>
	)
}

export const useNotes = () => {
	const context = useContext(NotesContext)
	if (!context) {
		throw new Error('useNotes must be used within a NotesProvider')
	}
	return context
}
