import React from 'react'

export default function Product(props) {
    const clickHandler = (id) => {
        props.onAddProduct(id)
        // console.log(id)
    }
    let { id, title, price, img } = props

    return (
        <div class="shop-item">
            <span class="shop-item-title">{title}</span>
            <img class="shop-item-image" src={img} alt='product image' />
            <div class="shop-item-details">
                <span class="shop-item-price">${price}</span>
                <button
                    class="btn btn-primary shop-item-button"
                    type="button"
                    onClick={()=>clickHandler(id)}>
                    ADD TO CART
                </button>
            </div>
        </div>
    )
}
