import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, image, title, price, rating}) {
    const [{ basket }, diapatch] = useStateValue();
    const removeFromBasket = () => {
        //
        diapatch({
            type: 'Remove_From_Basket',
            id: id,
        })
    }
    return (
        <div className='checkoutproduct'>
            <img className='checkoutproduct__image' src={image} />
            <div className='checkoutproduct__info'>
                <p className='checkoutproduct__title'>{title}</p>
                <p className='checkoutproduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutproduct__rating">
                {Array(rating).fill().map((_, i) => (<p>⭐</p>))}
                </div>
                <button onClick={removeFromBasket}>Remove From Cart</button>
                </div>
        </div>
    )
}

export default CheckoutProduct
