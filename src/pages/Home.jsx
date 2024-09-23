import React from 'react'

import Navbar from '../comp/Navbar'
import Category from '../comp/Category'
import Offer from '../comp/Offer'
import TopProducts from '../comp/TopProducts'
import Footer from '../comp/Footer'
import Offer2 from '../comp/Offer2'
import Dogfood from '../comp/Dog/Dogfood'
import PetShopOffers from '../Offer3'
import OfferSection from '../comp/OfferSection'
import Catfood from '../comp/Cat/Catfood'
import Cattreat from '../comp/Cat/Cattreat'


const Home = () => {
  return (
    <div>
  
     <Offer/>
    <Category/>
    <PetShopOffers/>
    <Cattreat/>
    <Offer2/>
    <Dogfood/>
    <OfferSection/>
  
   
    
    
    </div>
  )
}

export default Home