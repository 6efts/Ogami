import React from 'react';
import Footer from '../components/global-component/Footer';
import Header from '../components/global-component/Header';
import Deals from '../components/home component/Deals';
import FeaturedProducts from '../components/home component/FeaturedProducts';
import Hero from '../components/home component/Hero';
import HeroOptions from '../components/home component/HeroOptions';
import Services from '../components/home component/Services';

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