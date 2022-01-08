// NextJS Logic
import Link from "next/link";
import React from "react";
// Components
import EventHeader from "../Events/EventHeader/EventHeaderMain";
// Styles
import styles from "../../styles/next/components/Navbar.module.scss";

type INavItems = {
	value: string | JSX.Element;
	link: string;
	desc?: string;
}

const NavbarMain = () => {
	const navItems: INavItems[] = [
		{
			value: "About",
			link: "/about",
			desc: "Who we are, and what our mission is.",
		},
		{
			value: "Disease",
			link: "/disease",
			desc: "A collection on diseases and their information",
		},
		{
			value: "Cure",
			link: "/cure",
			desc: "Discussion board along with getting them connected to the right people, and the right resources.",
		}
	];

	return (
		<>
			<EventHeader />
			<div className={styles.navbarMainContainer}>
				<nav className={styles.navbarMain}>
					{/* <div className={styles.logoContainer}>
						<Link href="/">
							L.C.T.
						</Link>

					</div> */}
					<div className={styles.navbarMainItemListContainer}>
						<ul className={styles.navbarMainItemList}>
							{
								navItems.map((item, index) => {
									return (
										<li key={`navItem_${index}`}>
											<Link href={`${item.link}`}>
												{item.value}
											</Link>
										</li>
									);
								})
							}
						</ul>
					</div>
					<div className={styles.authContainer}>
						<button>
							<p>Login</p>
						</button>
						<button>
							<p>Register</p>
						</button>
					</div>
				</nav>
			</div>
		</>

	);
};

export default NavbarMain;
