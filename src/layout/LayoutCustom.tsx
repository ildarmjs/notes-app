import { Layout } from 'antd'
import type { PropsWithChildren } from 'react'
import HeaderCustom from './header-custom/HeaderCustom'
import SiderCustom from './sider-custom/SiderCustom'
import ContentCustom from './content-custom/ContentCustom'

const LayoutCustom = ({ children }: PropsWithChildren<unknown>) => {
	const layoutStyle = {
		height: '100vh',
		backgroundColor: '#242424'
	}
	return (
		<>
			<Layout style={layoutStyle}>
				<HeaderCustom />
				<Layout>
					<SiderCustom />
					<ContentCustom>{children}</ContentCustom>
				</Layout>
			</Layout>
		</>
	)
}

export default LayoutCustom
