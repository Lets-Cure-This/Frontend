// NextJS
import React from "react";
// Meta
import { NavbarAuthButtonProps } from "@utils/types/components/navbar/_index";

function NavbarAuthButtons({ styles }: NavbarAuthButtonProps) {
	return (
		<div className={styles.authContainer}>
			<button>
				<p>Login</p>
			</button>
			<button>
				<p>Register</p>
			</button>
		</div>
	);
}

export default NavbarAuthButtons;
