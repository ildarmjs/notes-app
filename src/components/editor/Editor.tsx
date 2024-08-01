import { Button, Flex, Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { FC } from 'react'

interface IEditorProps {
	editTitle: string
	setEditTitle: (str: string) => void
	editContent: string
	setEditContent: (str: string) => void
	handleSave: () => void
}

const Editor: FC<IEditorProps> = ({
	editTitle,
	setEditTitle,
	editContent,
	setEditContent,
	handleSave
}) => {
	return (
		<Flex vertical gap={24}>
			<Input
				style={{ fontSize: '22px', fontWeight: 'bold' }}
				value={editTitle}
				onChange={e => setEditTitle(e.target.value)}
			/>
			<TextArea
				rows={4}
				value={editContent}
				onChange={e => setEditContent(e.target.value)}
			/>
			<Button
				style={{ alignSelf: 'flex-start' }}
				onClick={handleSave}
				type='primary'
			>
				Сохранить
			</Button>
		</Flex>
	)
}

export default Editor
