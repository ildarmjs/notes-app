import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { Button, Flex, Form, Input } from 'antd'

const Login: FC = () => {
	const navigate = useNavigate()
	const { signIn } = useAuth()

	const handleSubmit = (values: any) => {
		const { user, password } = values
		if (!user || !password) {
			alert('Пожалуйста, заполните все поля')
			return
		}

		signIn(user, () => {
			navigate('/notes', {
				replace: true
			})
		})
	}

	return (
		<Flex
			vertical
			align='center'
			justify='center'
			style={{ minHeight: '100vh' }}
		>
			<Form
				onFinish={handleSubmit}
				style={{ width: '400px' }} // Центрируем форму
			>
				<Form.Item
					name='user'
					rules={[{ required: true, message: 'Пожалуйста, введите имя!' }]}
				>
					<Input placeholder='Введите имя' />
				</Form.Item>
				<Form.Item
					name='password'
					rules={[{ required: true, message: 'Пожалуйста, введите пароль!' }]}
				>
					<Input.Password placeholder='Введите пароль' />
				</Form.Item>
				<Form.Item>
					<Button type='primary' htmlType='submit' block>
						Войти
					</Button>
				</Form.Item>
			</Form>
		</Flex>
	)
}

export default Login
