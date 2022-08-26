import React from 'react'
import {FaEnvelope, FaPhoneAlt}  from "react-icons/fa";
import "./Header.scss";
import Selector from "./Selector";

const Header = () => {
  return (
    <header className='Header'>
        <div className='Header__first'>
          <ul>
            <li>
              <FaEnvelope 
              size={20}
              color = "#252525"
              />
              <span>info@ogami.com</span>
            </li>
            <li> | </li>
            <li>
              <FaPhoneAlt
               size={20}
              />
              <span>info@ogami.com</span>
            </li>
          </ul>
        </div>

        <div className='Header__second'>

        </div>
<<<<<<< Updated upstream
=======
      </div>

      <div className="Header__second">
        <img src="https://ogami-react.vercel.app/assets/images/logo.png" alt="logo" />

        <div className="Header__second--Search">
            <Selector />
        </div>
      </div>
>>>>>>> Stashed changes
    </header>
  )
}

export default Header