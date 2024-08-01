export interface IUser {
	id: string
	name: string
	password: string
}

export interface IAuthContext {
	user: IUser | null
	signIn: (newUser: IUser, callback: () => void) => void
	signOut: (callback: () => void) => void
}

