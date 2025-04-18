import Link from 'next/link'
import './header.scss'

const Header = () => {
	return (
		<header className='header'>
			<ul>
				<Link href='/'>Home</Link>
				<Link href='/pages'>Pages</Link>
				<Link href='/our-offer'>Our Offer</Link>
				<Link href='/pricing'>Pricing</Link>
				<Link href='/shop'>Shop</Link>
			</ul>
		</header>
	)
}

export default Header
