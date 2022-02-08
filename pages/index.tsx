import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>API URL Shortener</title>
        <link rel="icon" href='#' />
      </Head>
      <Navbar />
      
    </div>
  )
}