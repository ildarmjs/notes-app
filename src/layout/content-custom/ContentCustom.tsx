import { Layout } from 'antd'
import type { PropsWithChildren } from 'react'

const { Content } = Layout

const ContentCustom = ({ children }: PropsWithChildren<unknown>) => {
	const contentStyle: React.CSSProperties = {
		padding: '10px',
		minHeight: 120,
		color: '#000',
		backgroundColor: '#f0f0f0'
	}
	return <Content style={contentStyle}>{children}</Content>
}

export default ContentCustom
