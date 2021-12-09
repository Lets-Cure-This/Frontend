import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <h1>Title</h1>
          <div className={styles.l}></div>
        </div>
        <div>
          <h1>Title</h1>
          <div className={styles.l}></div>
        </div>
        <div>
          <h1>Title</h1>
          <div className={styles.l}></div>
        </div>
      </main>
    </div>
  )
}

export default Home
