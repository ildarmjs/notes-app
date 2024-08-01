import { FC } from 'react'
import { Layout } from 'antd'
import Navigation from '../../components/navigation/Navigation'
import ErrorBoundary from '../../components/error-boundary/ErrorBoundary'

const { Sider } = Layout
const SiderCustom: FC = () => {
	const siderStyle: React.CSSProperties = {
		textAlign: 'center',
		lineHeight: '120px',
		color: '#fff',
		borderRight: '1px solid #8c8c8c',
		backgroundColor: '#f0f0f0'
	}
	return (
		<Sider width='20%' style={siderStyle}>
			<ErrorBoundary>
				<Navigation />
			</ErrorBoundary>
		</Sider>
	)
}

export default SiderCustom
