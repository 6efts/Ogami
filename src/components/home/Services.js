import React from 'react';
import './Services.scss';
import { FaTruckMoving, FaRegClock, FaRegCreditCard } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";



const Services = () => {
  return (
    <div className='Services'>

        <div className='Services__list'>

            <FaTruckMoving 
                size={30}
                color= "#88c74a"
            />
            <h4>FREE SHIPPING</h4>
            <p>For all order over 99$</p>  

        </div>

        <div className='Services__list'>

            <FaRegClock 
                size={30}
                color= "#88c74a"
            />
            <h4>DELIVERY ON TIME</h4>
            <p>If good have prolems</p>  
        </div>

        <div className='Services__list'>

            <FaRegCreditCard 
                size={30}
                color= "#88c74a"
            />
            <h4>SECURE PAYMENT</h4>
            <p>100% secure payment</p>
        </div>

        <div className='Services__list'>

            <MdSupportAgent 
                 size={30}
                 color= "#88c74a"
            />
            <h4>24/7 SUPPORT</h4>
            <p>Dedicated support</p>
        </div>

    </div>
  )
}

export default Services