// NextJS
import React, { useState } from "react";
// Styles
import styles from "@styles/next/components/Events.module.scss";

function EventHeader() {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<>
			<div className={isOpen ? styles.eventContainer : styles.eventContainerClosed}>
				<p className={styles.eventText}>
					Spread the word, follow us on social media and stay up to date with
					the latest news and events.
				</p>
				<button onClick={() => setIsOpen(!isOpen)} className={styles.eventButton}>
					<p className={styles.eventText}>
						X
					</p>
				</button>
			</div>

		</>
	);
}

export default EventHeader;