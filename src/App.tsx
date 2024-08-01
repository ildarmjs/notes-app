import { FC } from 'react'
import AuthProvider from './context/AuthContext'
import { Route, Routes } from 'react-router-dom'
import DynamicComponent from './components/dynamic-component/DynamicComponent'
import { routes } from './config/main-routes'
import { NotesProvider } from './context/NotesContext'

const App: FC = () => {
	return (
		<AuthProvider>
			<NotesProvider>
				<Routes>
					<Route
						path={routes.login}
						element={<DynamicComponent name='LoginPage' />}
					/>
					<Route
						path={routes.notes}
						element={<DynamicComponent name='NotesPage' />}
					/>
					<Route
						path={routes.notFound}
						element={<DynamicComponent name='NotFoundPage' />}
					/>
				</Routes>
			</NotesProvider>
		</AuthProvider>
	)
}

export default App
