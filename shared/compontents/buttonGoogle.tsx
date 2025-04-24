'use client'
import { signIn } from 'next-auth/react'

const buttonGoogle = () => {
	return (
		<button
		className='social-button google'
			type='button'
			onClick={() => signIn('google', { callbackUrl: '/profile' })}
		>
			Войти через Google
		</button>
	)
}

export default buttonGoogle
