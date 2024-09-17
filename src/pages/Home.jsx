import React from 'react'

import Navbar from '../comp/Navbar'
import Category from '../comp/Category'
import Offer from '../comp/Offer'
import TopProducts from '../comp/TopProducts'
import Footer from '../comp/Footer'
import Offer2 from '../comp/Offer2'
import Dogfood from '../comp/Dog/Dogfood'
import PetShopOffers from '../Offer3'


const Home = () => {
  return (
    <div>
  
     <Offer/>
    <Category/>
    <TopProducts/>
    <Offer2/>
    <Dogfood/>
    <PetShopOffers/>
   
    
    
    </div>
  )
}

export default Home