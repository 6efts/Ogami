import React from 'react'
import './FeaturedProducts.scss';
import NavList from './NavList';

const FeaturedProducts = () => {
  return (
    <div className='FeaturedProducts'>
        <h2>Featured Product</h2>
        <div className='FeaturedProducts__divider'></div>

        <div className='FeaturedProducts__navlist'>
            <NavList />
        </div>

        <div className='FeaturedProducts__products'>

        </div>
    </div>
  )
}

export default FeaturedProducts