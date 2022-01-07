// React
import type { NextPage } from 'next'
// Components
import SearchBar from '../components/search/searchBar/main';

const Home: NextPage = () => {
	return (
		<div className='container'>
			<main className='main'>
				<SearchBar />
			</main>
		</div>
	)
}

export default Home
