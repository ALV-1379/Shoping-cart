import React from 'react'

export default function
    (props) {
let {img  , title , price } = props
    return (
        <div>
            <div class="cart-row">
                <div class="cart-item cart-column">
                    <img class="cart-item-image" src={img} width="100" height="100" alt='product image' />
                    <span class="cart-item-title">{title}</span>
                </div>
                <span class="cart-price cart-column">${price}</span>
                <div class="cart-quantity cart-column">
                    <h4>Your payment was successful</h4>
                </div>
            </div>
        </div>
    )
}
