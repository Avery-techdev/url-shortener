import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Shortener from "../components/Shortener/Shortener";
import Statistics from "../components/Statistics/Statistics";
import Boost from "../components/Boost/Boost";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>API URL Shortener</title>
        <link rel="icon" href="#" />
      </Head>
      <Navbar />
      <Header />
      <div className=" bg-light-gray">
        <Shortener />
      </div>
      <Statistics />
      <Boost />
      <Footer />
      <p className="text-center text-p">
        <a
          className=" text-cyan"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Avery-techdev/url-shortener"
        >
          Open Source Code{" "}
        </a>
        by Annabell Hauschild
      </p>
    </div>
  );
}
