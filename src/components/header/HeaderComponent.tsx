import { Flex } from 'antd'
import { FC, useCallback, useState } from 'react'
import { useNotes } from '../../context/NotesContext'
import Input from 'antd/es/input/Input'
import HeaderDeleteIcon from './header-delete-icon/HeaderDeleteIcon'
import HeaderAddIcon from './header-add-icon/HeaderAddIcon'
import HeaderEditIcon from './header-edit-icon/HeaderEditIcon'
import ModalComponent from '../modal-component/ModalComponent'
import ErrorBoundary from '../error-boundary/ErrorBoundary'

const HeaderComponent: FC = () => {
	const {
		addNote,
		deleteNote,
		selectedNoteId,
		setSelectedNoteId,
		setEditTitle,
		setEditContent,
		notes,
		setSearchQuery,
		searchQuery,
		setIsEditing
	} = useNotes()

	const [isModalVisible, setIsModalVisible] = useState(false)

	const handleAddNote = useCallback(() => {
		addNote('Новая заметка', 'Новый текст')
	}, [addNote])

	const handleEdit = useCallback(() => {
		const noteToEdit = notes.find(note => note.id === selectedNoteId)
		if (noteToEdit) {
			setEditContent(noteToEdit.content)
			setEditTitle(noteToEdit.title)
			setIsEditing(true)
		}
	}, [notes, selectedNoteId, setEditContent, setEditTitle])

	const showDeleteConfirm = () => {
		setIsModalVisible(true)
	}

	const handleDelete = () => {
		if (selectedNoteId !== null) {
			deleteNote(selectedNoteId)
			setSelectedNoteId(null)
			setIsModalVisible(false)
		}
	}

	const handleCancel = () => {
		setIsModalVisible(false)
	}
	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const query = event.target.value
		setSearchQuery(query)
		setSearchQuery(query)
	}

	return (
		<ErrorBoundary>
			<Flex gap='large' align='center'>
				<HeaderAddIcon handleAddNote={handleAddNote} />
				<HeaderDeleteIcon
					selectedNoteId={selectedNoteId}
					showDeleteConfirm={showDeleteConfirm}
				/>
				<HeaderEditIcon
					handleEdit={handleEdit}
					selectedNoteId={selectedNoteId}
				/>
				<Input
					type='text'
					placeholder='Поиск заметок'
					value={searchQuery}
					onChange={handleSearch}
				/>
			</Flex>
			<ModalComponent
				handleCancel={handleCancel}
				handleDelete={handleDelete}
				isModalVisible={isModalVisible}
			/>
		</ErrorBoundary>
	)
}

export default HeaderComponent
