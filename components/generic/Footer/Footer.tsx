// NextJS
import React from "react";
// Styles
import styles from "@styles/next/components/Footer.module.scss";
import Link from "next/link";

function Footer() {

	return (
		<div className={styles.footerContainer}>
			<ul className={styles.footerList}>
				{aboutList.map((ele, ind) => {
					return (
						<li className={styles.footerListItem} key={`${ele.value}_${ind}`}>
							<Link href={ele.link} passHref>
								<p>{ele.value}</p>
							</Link>
						</li>
					);
				})}
			</ul>
			<ul className={styles.footerList}>

			</ul>
			<ul className={styles.footerList}>

			</ul>
		</div >
	);
}

export default Footer;

type footerListType = {
	value: string;
	link: string;

}

const aboutList: footerListType[] = [
	{
		value: "Questions",
		link: "/Questions",
	},
	{
		value: "Donate",
		link: "/Donate",
	},
	{
		value: "Help",
		link: "/Help"
	}
];
