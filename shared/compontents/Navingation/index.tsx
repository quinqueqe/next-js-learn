'use client'
import Link from 'next/link'
import React from 'react'
import './navigation.scss'
import { useNavigation } from '@/shared/store'

const Navigation: React.FC = () => {
	const { activeNav, setActiveNav } = useNavigation(state => state)
	const navDb = [
		{
			title: 'Home',
			link: '/',
		},
		{
			title: 'Pages',
			link: '/pages',
		},
		{
			title: 'Our Offer',
			link: '/our-offer',
		},
		{
			title: 'Pricing',
			link: '/pricing',
		},
		{
			title: 'Shop',
			link: '/shop',
		},
	]
	return (
		<div>
			<ul>
				{navDb.map((item, i) => (
					<Link
						onClick={() => setActiveNav(i)}
						className={
							activeNav === i ? 'nav-link__active nav-link' : 'nav-link'
						}
						href={item.link}
						key={i}
					>
						{item.title}
					</Link>
				))}
			</ul>
		</div>
	)
}

export default Navigation
