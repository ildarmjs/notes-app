import { DeleteOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import { FC } from 'react'

interface IHeaderDeleteIconProps {
	selectedNoteId: number | null
	showDeleteConfirm: () => void
}

const HeaderDeleteIcon: FC<IHeaderDeleteIconProps> = ({
	selectedNoteId,
	showDeleteConfirm
}) => {
	return (
		<Space>
			<DeleteOutlined
				onClick={selectedNoteId ? showDeleteConfirm : undefined} // Условная обработка
				style={{
					fontSize: '24px',
					cursor: selectedNoteId ? 'pointer' : 'not-allowed',
					color: selectedNoteId ? 'inherit' : 'rgba(0, 0, 0, 0.25)' // Изменение цвета
				}}
			/>
		</Space>
	)
}

export default HeaderDeleteIcon
