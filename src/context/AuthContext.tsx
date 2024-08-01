import { createContext, FC, useContext, useState, ReactNode } from 'react'
import { IAuthContext, IUser } from '../types/types.auth'

const AuthContext = createContext<IAuthContext | null>(null)

export const useAuth = (): IAuthContext => {
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider')
	}
	return context
}

interface IAuthProvider {
	children: ReactNode
}

const AuthProvider: FC<IAuthProvider> = ({ children }) => {
	const [user, setUser] = useState<IUser | null>(() => {
		const savedUser = localStorage.getItem('user')
		return savedUser ? JSON.parse(savedUser) : null
	})

	const signIn = (newUser: IUser, callback: () => void) => {
		setUser(newUser)
		localStorage.setItem('user', JSON.stringify(newUser))
		callback()
	}

	const signOut = (callback: () => void) => {
		setUser(null)
		localStorage.removeItem('user')
		callback()
	}

	const value: IAuthContext = {
		user,
		signIn,
		signOut
	}

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
