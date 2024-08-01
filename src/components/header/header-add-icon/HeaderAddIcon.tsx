import { PlusOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import { FC } from 'react'

interface IHeaderAddIconProps {
	handleAddNote: () => void
}

const HeaderAddIcon: FC<IHeaderAddIconProps> = ({ handleAddNote }) => {
	return (
		<Space>
			<PlusOutlined
				onClick={handleAddNote}
				style={{ fontSize: '24px', cursor: 'pointer' }}
			/>
		</Space>
	)
}

export default HeaderAddIcon
