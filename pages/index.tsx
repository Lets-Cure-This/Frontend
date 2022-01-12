// React
import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
// Components
// import SearchBar from "../components/search/searchBar/main";
import DISEASE_LIST from "@components/utils/extDat/Disease_List";
// Styles
import styles from "@styles/next/pageData/Index.module.scss";

const Home: NextPage = () => {
	const [diseaseIndex, setDiseaseIndex] = useState<number>(0);
	const diseaseHeaderRef = useRef<HTMLHeadingElement>(null);

	useEffect(() => {
		if (diseaseHeaderRef.current === null)
			return;

		diseaseHeaderRef.current.animate(
			{
				opacity: [0, 1, 0]
			},
			2000
		);

		return;
	}, [diseaseIndex]);

	useEffect(() => {
		// // Move on to the next message every `n` milliseconds
		let timeout: NodeJS.Timeout;
		if (diseaseIndex < DISEASE_LIST.length - 1) {
			timeout = setTimeout(() => setDiseaseIndex(diseaseIndex + 1), 2000);
		}

		if (diseaseIndex === DISEASE_LIST.length - 1) {
			timeout = setTimeout(() => setDiseaseIndex(0), 2000);
		}

		return () => {
			clearTimeout(timeout);
		};

	}, [diseaseIndex]);

	return (

		<div className={styles.indexContainer}>
			<div className={styles.displayContainer}>
				<div className={styles.headerContainer}>
					<h1 className={styles.logoHeader}>{"Let's Cure"}</h1>
					<h3
						ref={diseaseHeaderRef}
						className={styles.diseaseHeader}
					>
						{DISEASE_LIST[diseaseIndex]}
					</h3>

				</div>


				<div className={styles.callToActionContainer}>
					<button className={styles.callToActionButton}>
						<p>
							{"Let's Cure Together!"}
						</p>
					</button>
				</div>
			</div>


			<div className={styles.slideshowContainer}>
				Slideshow here
			</div>

			<div className={styles.wContainer}>
				{wList.map((ele, ind) => {
					return (
						<div className={styles.wListItemContainer} key={`${ele.value}_${ind}`}>
							<h1 className={styles.wHeader}>{ele.value}</h1>
							<div className={styles.descriptionContainer}>
								<p className={styles.descriptor}>{ele.description}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div >
	);
};

type wListItemType = {
	value: string,
	description: string,
}

const wList: wListItemType[] = [
	{
		value: "Who",
		description: "Lasdas asda sads asd asgdk sdif iasd jasd jasid asijdi asjidasjidas jiasdjidasj iasdji jiasdj asji jiasdj iasjid asij asjid iajsd ijasd ijasj dsaji dasij aisjd ijasd jiji",
	},
	{
		value: "What",
		description: "Lasdas asda sads asd asgdk sdif iasd jasd jasid asijdi asjidasjidas jiasdjidasj iasdji jiasdj asji jiasdj iasjid asij asjid iajsd ijasd ijasj dsaji dasij aisjd ijasd jiji",
	},
	{
		value: "Where",
		description: "Lasdas asda sads asd asgdk sdif iasd jasd jasid asijdi asjidasjidas jiasdjidasj iasdji jiasdj asji jiasdj iasjid asij asjid iajsd ijasd ijasj dsaji dasij aisjd ijasd jiji",
	},
	{
		value: "Why",
		description: "Lasdas asda sads asd asgdk sdif iasd jasd jasid asijdi asjidasjidas jiasdjidasj iasdji jiasdj asji jiasdj iasjid asij asjid iajsd ijasd ijasj dsaji dasij aisjd ijasd jiji",
	},
	{
		value: "When",
		description: "Lasdas asda sads asd asgdk sdif iasd jasd jasid asijdi asjidasjidas jiasdjidasj iasdji jiasdj asji jiasdj iasjid asij asjid iajsd ijasd ijasj dsaji dasij aisjd ijasd jiji",
	},
	{
		value: "How",
		description: "Lasdas asda sads asd asgdk sdif iasd jasd jasid asijdi asjidasjidas jiasdjidasj iasdji jiasdj asji jiasdj iasjid asij asjid iajsd ijasd ijasj dsaji dasij aisjd ijasd jiji",
	},
];

export default Home;
