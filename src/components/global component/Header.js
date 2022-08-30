import React from "react";
import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaTwitter, FaLinkedin, FaPinterestP, FaAngleDown, FaUser, FaRegHeart } from "react-icons/fa";
import {AiOutlineShopping} from "react-icons/ai";
import "./Header.scss";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import Selector from "./Selector";

const Header = () => {
  return (
    <header className="Header">
      <div className="Header__first">
        <div className="Header__first--left">
          <ul>
            <FaEnvelope size={17} color="#252525" />

            <li>
              <span>info@ogami.com</span>
            </li>

            <li className="divider"> | </li>

            <FaPhoneAlt size={17} />
            <li>
              <span>+65 11.188.888</span>
            </li>
          </ul>
        </div>
        <div className="Header__first--right">
          <ul>
            <li> <FaFacebookF /> </li>
            <li> <FaTwitter /> </li>
            <li> <FaLinkedin /> </li>
            <li> <FaPinterestP /> </li>
          </ul>
         
          <span className="divider">|</span>

          <span className="country"> 
            <img src="https://ogami-react.vercel.app/assets/images/header/flag-usa.png"  alt="flag"/>
            <p>English</p>

            <span className="arrow">
              <FaAngleDown  color="#252525" size={20}/>
            </span>

          </span>

          <span className="divider">|</span>

          <span className="user"> 
            <FaUser />
            <p>Login</p>
          </span>

        </div>
      </div>

      <div className="Header__second">
      
        <Logo />

        <div className="searchBar">
          <Selector />
          <Searchbar />
        </div>
        

        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>About Us</li>
          <li>Blog</li>
        </ul>

        <div className="cart-section">
          <FaRegHeart 
            size={20}
          />  
          <AiOutlineShopping 
            size={25}
          />
          <p>$0.00</p>
        </div>
        

      </div>
    </header>
  );
};

export default Header;
