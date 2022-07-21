import React from 'react'
import Categories from './Categories'
import SlideCard from './SlideCard'

const Home = () => {
  return (
    <div className="home">
        <div className="container d_flex">
            <Categories />
            <SlideCard/>
        </div>
    </div>
  )
}

export default Home