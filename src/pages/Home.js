import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import SliderItems from '../Data'

function Home() {
  return (
    <div>
      <Slider slides={SliderItems}/>
      <Categories/>
      <Products/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Home