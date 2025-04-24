import React from 'react'
import Navigation from './navigation'

const Header = () => {
	return (
		<header className='header bg-blue-600'>
			<ul className='flex justify-between container'>
				<Navigation />
			</ul>
		</header>
	)
}

export default Header
