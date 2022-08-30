import React from 'react';
import './HeroOptions.scss';

const HeroOptions = () => {
  return (
    <div className='HeroOptions'>
      <div className='HeroOptions__image'>
        <img src="https://ogami-react.vercel.app/assets/images/hero-slider/two/1.png" alt="Hero Options"/>
      </div>
      <div className='HeroOptions__image'>
        <img src="https://ogami-react.vercel.app/assets/images/hero-slider/two/2.png" alt="Hero Options"/>
      </div>
      <div className='HeroOptions__image'>
        <img src="https://ogami-react.vercel.app/assets/images/hero-slider/two/3.png" alt="Hero Options"/>
      </div>
    </div>
  )
}

export default HeroOptions;