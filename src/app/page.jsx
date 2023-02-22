'use client';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'


import Navbar from '../components/navbar'
import Hero from '../components/home'
import Product from '../components/product'
import Categories from '../components/categories'
import Featurevideo from '../components/feature-video'
import Cards from '../components/cards'
import Newtelent from '../components/new-telent.jsx'
import Viewtalent from '../components/viewed-talent'
import Suggesttalent from '../components/suggest-talent'
import Readytogive from '../components/readytogive'
import Itwork from '../components/it-work'
import Footer from '../components/footer'
import Proplecard from '../components/prople-card'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
 <Navbar/>
     <Hero/>
     <Product/>
     <Categories/>
     <Featurevideo/>
     <Cards/>
     <Newtelent/>
     <Viewtalent/>
<Suggesttalent/>
<Readytogive/>
<Itwork/>
<Proplecard/>
<Footer/>

    </main>
  )
}
