import React from 'react'
import Slide from './Slide'
import About from './About'
import Products from './Products'
import Hero from './Hero'
import './styles.scss'

const Home = () => {
  return (
    <div className="Home">
      <Slide />
      <Products />
      <Hero />
      <About />
    </div>
  )
}

export default Home
