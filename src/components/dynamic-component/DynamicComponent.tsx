import { FC, lazy, Suspense } from 'react'

interface IDynamicComponentProps {
	name: string
}

const ComponentName = (name: string) => {
	return lazy(() => import(`../../pages/${name}.tsx`))
}

const DynamicComponent: FC<IDynamicComponentProps> = props => {
	const Component = ComponentName(props.name)

	return (
		<Suspense fallback='Загрузка...'>
			<Component {...props} />
		</Suspense>
	)
}

export default DynamicComponent
