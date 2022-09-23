import React from 'react';
import Deals from '../components/home/Deals';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Hero from '../components/home/Hero';
import HeroOptions from '../components/home/HeroOptions';
import Services from '../components/home/Services';

const Home = () => {
  return (
    <div>
      <Hero />
      <HeroOptions />
      <FeaturedProducts />
      <Services />
      <Deals />
    </div>
  )
}

export default Home