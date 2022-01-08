// React
import type { NextPage } from "next";
// Components
import SearchBar from "../components/search/searchBar/main";
// Styles
import styles from '../styles/pages/Home.module.scss';

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<main className='main'>
				<SearchBar />
			</main>
		</div>
	);
};

export default Home;
