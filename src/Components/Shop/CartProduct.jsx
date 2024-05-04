import React, { useState } from 'react'

export default function CartProduct(props) {
    let { id, title, price, img } = props
    const removeclickHandler = (id) => {
        props.onRemove(id)
    }
    const payclickHandler = (id)=>{
        props.onPay(id)
    }

    

    return (
        <div class="cart-row">
            <div class="cart-item cart-column">
                <img class="cart-item-image" src={img} width="100" height="100"  alt='product image' />
                <span class="cart-item-title">{title}</span>
            </div>
            <span class="cart-price cart-column">${price}</span>
            <div class="cart-quantity cart-column">
                <button className='btn paybtn' onClick={()=>payclickHandler(id)}>Pay</button>
                <button class="btn btn-danger" type="button" onClick={() => removeclickHandler(id)}>REMOVE</button>
            </div>
        </div>
    )
}





