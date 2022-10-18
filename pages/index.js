import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '@/components/Footer';
import Explore from '@/components/Explore'
import Header from '@/components/Header'





export default function Home() {



  return (
    <div >
      <Header />
      <div className={styles.container}>

        <Explore />
      </div>
      {/* 
      <h1 className="text-3xl font-bold m-80 underline">
        Hello world! 1
      </h1> */}

      <Footer />
    </div>
  )
}
