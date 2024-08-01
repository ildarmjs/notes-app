import { FC, useMemo } from 'react'
import { useNotes } from '../../context/NotesContext'
import { Menu } from 'antd'

const Navigation: FC = () => {
	const { notes, selectedNoteId, setSelectedNoteId, searchQuery } = useNotes()
	const filteredNotes = useMemo(() => {
		return notes.filter(
			note =>
				note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				note.content.toLowerCase().includes(searchQuery.toLowerCase())
		)
	}, [notes, searchQuery])

	const onClick = (e: any) => {
		const noteId = Number(e.key)
		setSelectedNoteId(noteId)
	}

	const items = filteredNotes.map(note => ({
		key: note.id!.toString(),
		label: (
			<div style={{ padding: '15px' }}>
				<div style={{ lineHeight: 1.2, fontWeight: 'bold' }}>{note.title}</div>
				<div
					style={{
						lineHeight: 1.5,
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						whiteSpace: 'nowrap'
					}}
				>
					{note.content}
				</div>
			</div>
		)
	}))

	return (
		<>
			<Menu
				onClick={onClick}
				style={{ height: '100%', overflowY: 'auto', paddingTop: 20 }}
				selectedKeys={selectedNoteId ? [selectedNoteId.toString()] : []}
				mode='inline'
				items={items}
			/>
		</>
	)
}

export default Navigation
