'use client'
import { useSession, signOut } from 'next-auth/react'

import Link from 'next/link'
import React from 'react'

const Navigation: React.FC = () => {
	const session = useSession()
	console.log(session)
	return (
		<>
			<Link href='/'>
				<button className='text-2xl text-gray-900 font-medium cursor-pointer transition-all duration-300 hover:text-orange-500'>
					Home
				</button>
			</Link>
			{session?.data && (
				<Link href='/profile'>
					<button className='text-2xl text-gray-900 font-medium cursor-pointer transition-all duration-300 hover:text-orange-500'>
						Profile
					</button>
				</Link>
			)}
			{session.data ? (
				<button
					onClick={() => signOut({ callbackUrl: '/' })}
					className='text-2xl text-gray-900 font-medium cursor-pointer transition-all duration-300 hover:text-orange-500'
				>
					Log Out
				</button>
			) : (
				<Link href='/login'>
					<button className='text-2xl text-gray-900 font-medium cursor-pointer transition-all duration-300 hover:text-orange-500'>
						Log in
					</button>
				</Link>
			)}
		</>
	)
}

export default Navigation
