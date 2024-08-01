import { FC, memo } from 'react'
import { useNotes } from '../../context/NotesContext'
import { Flex } from 'antd'
import Editor from '../editor/Editor'

const Notes: FC = memo(() => {
	const {
		notes,
		selectedNoteId,
		updateNote,
		setSelectedNoteId,
		setEditContent,
		editContent,
		editTitle,
		setEditTitle
	} = useNotes()

	const selectedNote = notes.find(note => note.id === selectedNoteId)

	const handleSave = () => {
		if (selectedNoteId !== null) {
			updateNote(selectedNoteId, editContent, editTitle)
			setEditContent('')
			setSelectedNoteId(selectedNoteId)
		}
	}

	return (
		<div>
			{selectedNoteId === null ? (
				<div>Выберите заметку для просмотра/редактирования</div>
			) : (
				<div>
					{editContent !== '' ? (
						<Editor
							editContent={editContent}
							editTitle={editTitle}
							handleSave={handleSave}
							setEditContent={setEditContent}
							setEditTitle={setEditTitle}
						/>
					) : (
						<Flex vertical gap={24}>
							<h2>{selectedNote?.title}</h2>
							<p>{selectedNote?.content}</p>
						</Flex>
					)}
				</div>
			)}
		</div>
	)
})

export default Notes
