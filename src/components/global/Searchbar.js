import React, { useState, useEffect, useCallback } from 'react';

import axios from 'axios'

import useHttp from '../../hooks/useHttp';
import { getAutocompleteData } from '../../api/productsAPI'
import { FaSearch } from "react-icons/fa";
import "./Searchbar.scss";

let isFirstRun = true;

const AutocompleteList = ({items}) => {
    return <ul className='autocomplete__list'>
      {items.map(item => <AutocompleteItem key={item.id} item={item}/>)}
    </ul>
}

const AutocompleteItem = ({item}) => {
  return <li className='autocomplete__item'>
    <div className='autocomplete__item--imgContainer'>
      <img src={item.image} alt={item.name} />
    </div>
    <div className='autocomplete__item--content'>
      <p className='autocomplete__item--name'>{item.name}</p>
      <p className='autocomplete__item--price'>${item.price}</p>
    </div>
  </li>
}

const Searchbar = () => {
  const [nameToSearch, setNameToSearch] = useState("")
  const {data, status, error, sendRequest, resetData} = useHttp(getAutocompleteData);

  const onSearchHandler = useCallback((event) => {
    event.preventDefault();
    sendRequest(nameToSearch);
  }, [sendRequest, nameToSearch]);

  const inputOnChangeHandler = (event) => {
    setNameToSearch(event.target.value)
  }

  useEffect(()=>{
    if (isFirstRun) {
      isFirstRun = false;
      return;
    };

    if (nameToSearch.length === 0) {
      resetData();
      return;
    }

    const timer = setTimeout(sendRequest.bind(null, nameToSearch), 200);
    return () => {
      clearTimeout(timer)
    }
  }, [nameToSearch])

  const renderAutocompleteList = () => {
    return data?.length > 0 && <AutocompleteList items={data}/>
  }

  return (
    <>
    <form className='SearchBar' onSubmit={onSearchHandler}>
        <input type ="text" value={nameToSearch} onChange={inputOnChangeHandler}/>

        <button>
            <FaSearch color="white"/>
        </button>

        {renderAutocompleteList()}
        
    </form>

    
    </>
  )
}

export default Searchbar