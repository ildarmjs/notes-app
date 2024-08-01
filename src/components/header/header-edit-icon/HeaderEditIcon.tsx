import { EditOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import { FC } from 'react'

interface IHeaderEditIconProps {
	selectedNoteId: number | null
	handleEdit: () => void
}

const HeaderEditIcon: FC<IHeaderEditIconProps> = ({
	selectedNoteId,
	handleEdit
}) => {
	return (
		<Space>
			<EditOutlined
				onClick={selectedNoteId ? handleEdit : undefined} // Условная обработка
				style={{
					fontSize: '24px',
					cursor: selectedNoteId ? 'pointer' : 'not-allowed',
					color: selectedNoteId ? 'inherit' : 'rgba(0, 0, 0, 0.25)' // Изменение цвета
				}}
			/>
		</Space>
	)
}

export default HeaderEditIcon
