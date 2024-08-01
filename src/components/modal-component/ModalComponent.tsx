import { Modal } from 'antd'
import { FC } from 'react'

interface IModalComponentProps {
	isModalVisible: boolean
	handleDelete: () => void
	handleCancel: () => void
}

const ModalComponent: FC<IModalComponentProps> = ({
	isModalVisible,
	handleDelete,
	handleCancel
}) => {
	return (
		<Modal
			title='Подтверждение удаления'
			open={isModalVisible}
			onOk={handleDelete}
			onCancel={handleCancel}
		>
			<p>Вы уверены, что хотите удалить эту заметку?</p>
		</Modal>
	)
}

export default ModalComponent
