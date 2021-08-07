import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';
function Product({ id, title, image, price, rating}) {
    const [{ basket }, diapatch] = useStateValue();
    console.log('this is basket', basket);
    const addToCart =() =>{
        diapatch({
            type: 'ADD_To_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,

            },
        });

    };
    return (
        <div className="product">

            <div className="product__info">
                <p >{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (<p>⭐</p>))}
                    
                </div>
            </div>
            <img className="product_img"src={image} />
            <button className="product__button " onClick={addToCart}>Add to Cart</button>
            
        </div>
    )
}

export default Product

