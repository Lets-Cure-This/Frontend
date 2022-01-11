// NextJS
import React, { useState } from "react";
import Image from "next/image";
// Styles
import styles from "@styles/next/components/Events.module.scss";
import xSVG from "@public/x.svg";

function EventHeader() {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<>
			<div className={isOpen ? styles.eventContainer : styles.eventContainerClosed}>
				<p className={styles.eventText}>
					Spread the word, follow us on social media and stay up to date with
					the latest news and events.
				</p>
				{/* <button onClick={() => setIsOpen(!isOpen)} className={styles.eventButton}> */}
				<Image
					src={xSVG}
					alt="x symbol to exit"
					height={25} width={25}
					layout="fixed"
					objectFit="cover"
					className={styles.eventButton}
					onClick={() => setIsOpen(!isOpen)}
				/>
				{/* </button> */}
			</div>

		</>
	);
}

export default EventHeader;