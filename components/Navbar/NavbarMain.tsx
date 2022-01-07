// NextJS Logic
import Link from 'next/link'
import React from 'react'
// Styles
import styles from '../../styles/components/Navbar.module.css'

interface INavItems {
	name: string;
	link: string;
	desc?: string;
}

const NavbarMain = () => {
	const navItems: INavItems[] = [
		{
			name: 'Home',
			link: '/',
			desc: "Home Page",
		},
		{
			name: 'About',
			link: '/About',
			desc: "Who we are, and what our mission is.",
		},
		{
			name: "Disease",
			link: "/Disease",
			desc: "A collection on diseases and their information",
		},
		{
			name: "Cure",
			link: "/Cure",
			desc: "Discussion board along with getting them connected to the right people, and the right resources.",
		}
	]

	return (
		<nav className={styles.navbarMain}>
			{
				navItems.map((item, index) => {
					return (
						<li key={`navItem_${index}`}>
							<Link href={`${item.link}`}>{item.name}</Link>
						</li>
					)
				})
			}
		</nav>
	)
}

export default NavbarMain
