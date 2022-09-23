import Select from 'react-select';

const Filtering = () => {

  const options = [
    { value: "A to Z", label: "A to Z" },
    { value: "Z to A", label: "Z to A" },
    { value: "High to Low Price", label: "High to Low Price" },
    { value: "Low to High Price", label: "Low to High Price" }


  ]

  const customStyles = {

    control: (styles) => ({
      ...styles,
      width: '200px',
      borderRadius: 'none'

    }),

  }

  return <Select options={options} styles={customStyles} width='200px'
    menuColor='red' />

}



export default Filtering;
