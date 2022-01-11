// NextJS
import Link from "next/link";
import React from "react";
// Meta
import { NavbarLogoProps } from "@utils/types/components/navbar/_index";

function NavbarLogo({ styles }: NavbarLogoProps) {
	return (
		<div className={styles.logoContainer}>
			<Link href="/">
				L.C.T.
			</Link>

		</div>
	);
}

export default NavbarLogo;
