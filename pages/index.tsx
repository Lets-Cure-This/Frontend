// React
import type { NextPage } from 'next'
// Components
import SearchBar from '../components/search/searchBar/main'
// Styles
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <SearchBar />
      </main>
    </div>
  )
}

export default Home
