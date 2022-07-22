import React from 'react'
import FlashDeals from '../components/flashDeals/FlashDeals'
import Home from '../components/mainpages/Home'

const Pages = ({productItems,cartItem, addToCart}) => {
  return (
    <>
        <Home cartItem={cartItem}/>
        <FlashDeals productItems={productItems} addToCart={addToCart}/>
    </>
  )
}

export default Pages