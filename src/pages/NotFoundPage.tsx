import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage: FC = () => {
	const navigate = useNavigate()

	return (
		<div>
			<div>
				<h1>404 | Страница не найдена</h1>
				<button onClick={() => navigate('/notes')}>Вернуться назад</button>
			</div>
		</div>
	)
}

export default NotFoundPage
