import { FC } from 'react'
import LayoutCustom from '../layout/LayoutCustom'
import Notes from '../components/notes/Notes'
import ErrorBoundary from '../components/error-boundary/ErrorBoundary'

const NotesPage: FC = () => {
	return (
		<LayoutCustom>
			<ErrorBoundary>
				<Notes />
			</ErrorBoundary>
		</LayoutCustom>
	)
}

export default NotesPage
