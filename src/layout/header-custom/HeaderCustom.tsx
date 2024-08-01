import { FC } from 'react'
import { Layout } from 'antd'
import HeaderComponent from '../../components/header/HeaderComponent'

const { Header } = Layout
const HeaderCustom: FC = () => {
	const headerStyle: React.CSSProperties = {
		color: '#000',
		height: 64,
		paddingInline: 48,
		lineHeight: '64px',
		borderBottom: '1px solid #8c8c8c',
		backgroundColor: '#f0f0f0'
	}
	return (
		<Header style={headerStyle}>
			<HeaderComponent />
		</Header>
	)
}

export default HeaderCustom
