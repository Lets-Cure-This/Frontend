// React
import type { NextPage } from "next";
// Components
import SearchBar from "../components/search/searchBar/main";
// Styles
import styles from "../styles/next/pages/Home.module.scss";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<SearchBar />
		</div>
	);
};

export default Home;
