import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <div className='Hero'>
        <div className='Hero__details'>
            <h4>Fruit Fresh</h4>
            <h2>Orange Lemon</h2>
            <p>
                <span>$14.00</span>
                /package
            </p>

            <button>SHOP NOW!</button>
        </div>

        <div className='Hero__image'> 
            <img src="https://ogami-react.vercel.app/assets/images/hero-slider/one/1.png" alt="hero"/>
        </div>

    </div>
  )
}

export default Hero;