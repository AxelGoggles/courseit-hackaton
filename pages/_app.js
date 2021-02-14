import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Head from "next/head";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}

export default MyApp;
