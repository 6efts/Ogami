import React from 'react';
import Footer from '../components/global-component/Footer';
import Header from '../components/global-component/Header';
import Hero from '../components/home component/Hero';
import HeroOptions from '../components/home component/HeroOptions';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <HeroOptions />
      <Footer />
    </div>
  )
}

export default Home