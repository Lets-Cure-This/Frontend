// NextJS Logic
import React from "react";
// Styles
import styles from "@styles/next/components/Navbar.module.scss";
// Components
import NavbarLogo from "./NavbarComponents/NavbarLogo";
import NavbarList from "./NavbarComponents/NavbarList";
import NavbarAuthButtons from "./NavbarComponents/NavbarAuthButtons";
// Meta
import NAV_ITEMS from "../../utils/extDat/navItemsList";

const NavbarMain = () => {


	return (
		<div className={styles.navbarMainContainer}>
			<nav className={styles.navbarMain}>
				{/* Logo for navbar */}
				<NavbarLogo styles={styles} />

				{/* List of all the navbar options */}
				<NavbarList styles={styles} navItems={NAV_ITEMS} />

				{/* Buttons for Login/Register */}
				<NavbarAuthButtons styles={styles} />
			</nav>
		</div>
	);
};

export default NavbarMain;
