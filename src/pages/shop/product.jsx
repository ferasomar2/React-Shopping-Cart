import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {
    const {id,productName,price,productImage} = props.data;

    const {addToCart,cartItems} = useContext(ShopContext);
    const cartItemAmount = cartItems[id];
    console.log(cartItemAmount);
  return (
    <div className='product'>
        <img src={productImage} alt='product' />

        <div className='description'>
            <p>
                <b>{productName}</b>
            </p>

            <p>${price}</p>
            <button className='addToCartBttn' onClick={() => {
                addToCart(id);
            }}>
                Add to Cart {cartItemAmount > 0 && <>
                    ({cartItemAmount})
                </>}
            </button>
        </div>

    </div>
  )
}
