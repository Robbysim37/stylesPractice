import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className='container'>
        <header></header>
        <nav></nav>
        <image className='hero'></image>
          <main></main>
          <div className='banner'></div>
          <div className='extra'></div>
          <image className='image'></image>
      </div>
    </>
  )
}
