import {useState, useEffect} from 'react';

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
            name: "Spinach",
            price: "$29.99",
        },
        {
            image : 'https://ogami-react.vercel.app/assets/images/products/4.png',
            name: "Banana",
            price: "$17.00",
        }
    ]

    setItems(product);
    },[])

    return(
        <>
            {
               items && items.map((item)=>{
                return(
                    <div className='card'>

                    </div>
                )
               })
            }
        </>    
    )


}

export default Card;