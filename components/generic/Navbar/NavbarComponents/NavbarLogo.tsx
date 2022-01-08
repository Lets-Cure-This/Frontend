// NextJS
import Link from "next/link";
import React from "react";
// Styles
import styles from "../../../../styles/next/components/Navbar/Navbar.module.scss";
import "";

function NavbarLogo() {
	return (
		<div className={styles.logoContainer}>
			<Link href="/">
				L.C.T.
			</Link>

		</div>
	);
}

export default NavbarLogo;
