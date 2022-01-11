// React
import type { NextPage } from "next";
import { useEffect, useState } from "react";
// Components
// import SearchBar from "../components/search/searchBar/main";
import DISEASE_LIST from "@components/utils/extDat/Disease_List";
// Styles
import styles from "@styles/next/pageData/Index.module.scss";

const Home: NextPage = () => {
	const [diseaseIndex, setDiseaseIndex] = useState<number>(0);

	useEffect(() => {
		// Move on to the next message every `n` milliseconds
		let timeout: NodeJS.Timeout;

		if (diseaseIndex < DISEASE_LIST.length - 1) {
			timeout = setTimeout(() => setDiseaseIndex(diseaseIndex + 1), 3000);
		}

		if (diseaseIndex === DISEASE_LIST.length - 1) {
			timeout = setTimeout(() => setDiseaseIndex(0), 3000);
		}

		return () => {
			clearTimeout(timeout);
		};

	}, [diseaseIndex]);


	return (

		<div className={styles.indexContainer}>
			<div className={styles.headerContainer}>
				<h1 className={styles.logoHeader}>{"Let's Cure"}</h1>
				<h3 className={styles.diseaseHeader}>
					{DISEASE_LIST[diseaseIndex]}
				</h3>
			</div>


			<div className={styles.callToActionContainer}>
				<button className={styles.callToActionButton}>
					<p>
						{"Let's Cure This!"}
					</p>
				</button>
			</div>
		</div>
	);
};

export default Home;
