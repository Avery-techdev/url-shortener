import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>API URL Shortener</title>
        <link rel="icon" href="#" />
      </Head>
      <Navbar />
      <div></div>
      <Header />
    </div>
  );
}
