import React from 'react'
import Categories from './Categories'
import SliderHome from './SliderHome'
import "./Home.css"
const Home = () => {
  return (
    <div className="home">
        <div className="container d_flex">
            <Categories />
            <SliderHome/>
        </div>
    </div>
  )
}

export default Home