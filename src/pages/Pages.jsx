import React from 'react'
import Discount from '../components/discount/Discount'
import FlashDeals from '../components/flashDeals/FlashDeals'
import Home from '../components/mainpages/Home'
import NewArrivals from '../components/newArrivals/NewArrivals'
import TopCate from '../components/top/TopCate'

const Pages = ({productItems,cartItem, addToCart}) => {
  return (
    <>
        <Home cartItem={cartItem}/>
        <FlashDeals productItems={productItems} addToCart={addToCart}/>
        <TopCate />
        <NewArrivals/>
        <Discount />
    </>
  )
}

export default Pages