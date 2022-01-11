// NextJS
import Link from "next/link";
import React from "react";
// Meta
import { NavbarListProps, NavItemsType } from "@utils/types/components/navbar/_index";

function NavbarList({ styles, navItems }: NavbarListProps) {
	return (
		<div className={styles.navbarMainItemListContainer}>
			<ul className={styles.navbarMainItemList}>
				{
					navItems.map((item: NavItemsType, index: number) => {
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
	);
}

export default NavbarList;
