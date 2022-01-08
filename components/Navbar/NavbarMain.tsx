// NextJS Logic
import Link from "next/link";
import React from "react";
// Styles
import styles from "../../styles/components/Navbar.module.scss";

type INavItems = {
	value: string | JSX.Element;
	link: string;
	desc?: string;
}

const NavbarMain = () => {
	const navItems: INavItems[] = [
		{
			value: "L.C.T.",
			link: "/",
			desc: "Home Page",
		},
		{
			value: "About",
			link: "/About",
			desc: "Who we are, and what our mission is.",
		},
		{
			value: "Disease",
			link: "/Disease",
			desc: "A collection on diseases and their information",
		},
		{
			value: "Cure",
			link: "/Cure",
			desc: "Discussion board along with getting them connected to the right people, and the right resources.",
		}
	];

	return (
		<div className={styles.navbarMainContainer}>
			<nav className={styles.navbarMain}>
				<div className={styles.navbarMainItemListContainer}>
					<ul className={styles.navbarMainItemList}>
						{
							navItems.map((item, index) => {
								return (
									<li key={`navItem_${index}`}>
										<Link href={`${item.link}`}>{item.value}</Link>
									</li>
								);
							})
						}
						<div className={styles.authContainer}>
							<button>
								<p>Login</p>
							</button>
							<button>
								<p>Register</p>
							</button>
						</div>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavbarMain;
