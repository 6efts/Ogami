import React from 'react'
import Select from 'react-select';

const Selector = () => {
    const options = [
        {value: "All Categories", label : "All Categories"},
        {value: "Bread", label : "Bread"},
        {value: "Fastfood", label : "Fastfood"},
        {value: "Ocean Foods", label : "Ocean Foods"},
        {value: "Oranges", label : "Oranges"},
        {value: "Organic Drinks", label : "Organic Drinks"},
        {value: "Vegetables", label : "Vegetables"}
        
    ]

    const customStyles = {
    
        control: (styles) => ({
            ...styles,
            width: '200px',
          
        }),
      
      }

  return <Select options={options} styles={customStyles} width='200px'
  menuColor='red'/>
  
}

export default Selector