import React from 'react'
import { Banner } from '../components/Banner'
import { BestSellerBooks } from './BestSellBooks'
import { FavBook } from './FavBook'
import { PromoBanner } from './PromoBanner'
import { OtherBooks } from './OtherBooks'
import { Review } from './Review'

export const Home = () => {
  return (
   <div className="banner">
    <Banner/>
    <BestSellerBooks/>
    <FavBook/>
    <PromoBanner/>
    <OtherBooks/>
    <Review/>
   </div>
  )
}
