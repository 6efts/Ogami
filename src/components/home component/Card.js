import {useState, useEffect} from 'react';
import './Card.scss';
import { FaRegHeart, FaRandom, FaEye } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";


const Card = () =>{
    const [items, setItems] = useState();

    useEffect(() => {
    const product = [
        {
            image : 'https://ogami-react.vercel.app/assets/images/products/1.png',
            category: "Fruits",
            name: "Grapes",
            price: "$6.99",
        },
        {
            image : 'https://ogami-react.vercel.app/assets/images/products/2.png',
            category: "Bread    ",
            name: "Sliced Bread",
            price: "$5.99",
        },
        {
            image : 'https://ogami-react.vercel.app/assets/images/products/3.png',
            category: "Vegetables",
            name: "Spinach",
            price: "$29.99",
        },
        {
            image : 'https://ogami-react.vercel.app/assets/images/products/4.png',
            category: "Fruits",
            name: "Mixed Berries",
            price: "$15.00",
        },
        {
            image : 'https://ogami-react.vercel.app/assets/images/products/5.png',
            category: "Fruits",
            name: "Banana",
            price: "$17.00",
        },
        {
            image : 'https://ogami-react.vercel.app/assets/images/products/6.png',
            category: "FastFood",
            name: "Burger",
            price: "$29.00",
        },
        {
            image : 'https://ogami-react.vercel.app/assets/images/products/7.png',
            category: "Fruits",
            name: "Oranges",
            price: "$10.00",
        },
        {
            image : 'https://ogami-react.vercel.app/assets/images/products/8.png',
            category: "FastFood",
            name: "Cup Cakes",
            price: "$20.00",
        },
        {
            image : 'https://ogami-react.vercel.app/assets/images/products/9.png',
            category: "Fruit",
            name: "Jack Fruit",
            price: "$18.00",
        },
        {
            image : 'https://ogami-react.vercel.app/assets/images/products/10.png',
            category: "Vegetables",
            name: "Spices",
            price: "$10.00",
        },
        {
            image : 'https://ogami-react.vercel.app/assets/images/products/11.png',
            category: "Meat",
            name: "Fresh Meat",
            price: "$59.00",
        },
        {
            image : 'https://ogami-react.vercel.app/assets/images/products/12.png',
            category: "Fruit",
            name: "Peers",
            price: "$10.00",
        },
        
    ]

    setItems(product);
    },[])

    return(
        <>
            {
               items && items.map((item)=>{
                return(
                    <div className='Card' key={item.name}>
                        <div className='Card__image'>
                            <img src={item.image} alt={item.name} />
                        </div>
                        
                        <div className='Card__content' >
                            <p>{item.category}</p>
                            <h5>{item.name}</h5>
                            <h5>{item.price}</h5>
                        </div>

                        <div className='Card__icons'>
                            <div className='--background'>
                              <FaRegHeart 
                              className='icons'
                              size={15}
                              />
                              
                            </div>
                            <div className='--background'>
                              <BiShoppingBag 
                              className='icons'/>
                            </div>
                            <div className='--background'>
                              <FaRandom 
                              className='icons'/>
                            </div>
                            <div className='--background'>
                              <FaEye 
                              className='icons'/>
                            </div>
                           

                        </div>
                    </div>
                )
               })
            }
        </>    
    )


}

export default Card;