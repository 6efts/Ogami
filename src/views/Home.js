import React from 'react';
import Footer from '../components/global-component/Footer';
import Header from '../components/global-component/Header';
import FeaturedProducts from '../components/home component/FeaturedProducts';
import Hero from '../components/home component/Hero';
import HeroOptions from '../components/home component/HeroOptions';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <HeroOptions />
      <FeaturedProducts />
      <Footer />
    </div>
  )
}

export default Home