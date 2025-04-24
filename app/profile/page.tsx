/* eslint-disable @next/next/no-img-element */
import { redirect } from 'next/navigation'
import { auth } from '@/auth'

import React from 'react'

const Profile = async () => {
	const session = await auth()
	const user = session?.user
	if (!session) {
		// Если пользователь не авторизован — редирект на /login
		redirect('/login')
	}
	return (
		<div className='container pt-12'>
			<p>{user?.name}</p>
			<p>{user?.email}</p>
			<img src={user?.image ?? undefined} alt='img' />
		</div>
	)
}

export default Profile
