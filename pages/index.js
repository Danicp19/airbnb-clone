import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
  <h1 className="text-3xl font-bold underline">
      Hello world! 1
    </h1>
    <Footer />
    </div>
  )
}
