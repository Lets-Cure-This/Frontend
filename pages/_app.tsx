// NextJS
import Head from "next/head";
import type { AppProps } from "next/app";
// Styles
import "../styles/globals.scss";
import styles from "@styles/app.module.scss";
// Components
import NavbarMain from "../components/generic/Navbar/NavbarMain";
import EventHeader from "@components/generic/Events/EventHeader/EventHeaderMain";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>{"Let's Cure Everything!"}</title>
				<meta name="description" content="Let's Cure This" />
				<link rel="icon" href="/dna.svg" />
			</Head>
			<EventHeader />
			<NavbarMain />
			<main className={styles.pageContainer}>
				<Component {...pageProps} />
			</main>
		</>
	);
}

export default MyApp;
