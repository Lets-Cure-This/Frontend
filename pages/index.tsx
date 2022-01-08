// React
import type { NextPage } from "next";
// Components
// import SearchBar from "../components/search/searchBar/main";
// Styles
import styles from "../styles/next/pages/Home.module.scss";

const Home: NextPage = () => {
	return (
		<div className={styles.indexContainer}>
			<h1 className={styles.header}></h1>
			<h3 className={styles.subHeader}></h3>

			<div className={styles.callToAction}></div>
		</div>
	);
};

export default Home;
