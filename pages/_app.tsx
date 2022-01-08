// NextJS
import Head from "next/head";
import type { AppProps } from "next/app";
// Styles
import "../styles/globals.css";
import NavbarMain from "../components/Navbar/NavbarMain";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Let's Cure This" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavbarMain />
			<>
				<Component {...pageProps} />
			</>
		</>
	);
}

export default MyApp;
