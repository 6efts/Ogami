import React from 'react';
import "./Searchbar.scss";
import { FaSearch } from "react-icons/fa";



const Searchbar = () => {
  return (
    <div className='SearchBar'>
        <input type ="text" />
        <button>
            <FaSearch color="white"/>
        </button>
        
    </div>
  )
}

export default Searchbar