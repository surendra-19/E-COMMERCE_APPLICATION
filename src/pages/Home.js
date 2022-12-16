import React from 'react'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Slider from '../components/Slider'
import SliderItems from '../Data'

function Home() {
  return (
    <div>
      <Slider slides={SliderItems}/>
      <Categories/>
      <Products/>
    </div>
  )
}

export default Home