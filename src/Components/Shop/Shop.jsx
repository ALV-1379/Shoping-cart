import React, { useState } from 'react'
import Product from './Product'
import CartProduct from './CartProduct'
import Social from './Social'
import PayedCard from './PayedCard'

export default function Shop() {

    const [products] = useState([
        { id: 1, title: 'hodi ', price: 5, img: 'images/hodi.png/' },
        { id: 2, title: 'jacket', price: 15, img: 'images/jacket.png' },
        { id: 3, title: 'poloshirt', price: 20, img: 'images/poloshirt.png' },
        { id: 4, title: 'shirt', price: 100, img: 'images/shirt.png' },
        { id: 5, title: 'tshirt', price: 5, img: 'images/tshirt.png' },
        { id: 6, title: 'white-jacket', price: 50, img: 'images/white-jacket.png' },
    ])

    const [shoppingCart, setShoppingCart] = useState([])
    const [payed, setPayed] = useState([])
    const [socials] = useState([
        { id: 1, href: 'https://www.youtube.com', img: 'images\youtube.png' },
        { id: 2, href: 'https://twitter.com', img: 'images\twitter.png' },
        { id: 3, href: 'https://www.facebook.com', img: 'images\facebook.png' },
    ])

    /* this function add selected product to card product */
    const addProductToCart = (productId) => {

        let mainProduct = products.find(product => {
            return product.id === productId
        })

        setShoppingCart(prevState => {
            return [...prevState, mainProduct]
        })

    }
    /*end adding function  */
    const addtoPayed = (payedid) => {
        let complatepey = products.find(product=>{
            return product.id === payedid
        })


        setPayed(prevState=>{
            return [...prevState , complatepey]
        })
        
        
    }


    /* this functions remove subject from shoping card first one */
    const emptyShoppingCart = () => {
        setShoppingCart([])
    }
    const emptyPayedcart = ()=>{
        setPayed([])
    }

    const removeProductFromCart = (productId) => {

        let newShoppingCart = shoppingCart.filter(product => {
            return product.id !== productId
        })

        setShoppingCart(newShoppingCart)
    }
    /* end */
    return (
        <>
            <header class="main-header">
                <nav class="main-nav nav">
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">STORE</a></li>
                        <li><a href="#">ABOUT</a></li>
                    </ul>
                </nav>
                <h1 class="band-name band-name-large">Clothes Shop</h1>
            </header>
            <section class="container content-section">
                <div class="shop-items">

                    {products.map(product => (
                        <Product key={product.id} {...product} onAddProduct={addProductToCart} />
                    ))}
                </div>
            </section>
            <section class="container content-section">
                <h2 class="section-header">CART</h2>
                <div class="cart-row">
                    <span class="cart-item cart-header cart-column">ITEM</span>
                    <span class="cart-price cart-header cart-column">PRICE</span>
                    <span class="cart-quantity cart-header cart-column">Doing</span>
                </div>
                <div class="cart-items">

                    {shoppingCart.map(product => (
                        <CartProduct {...product} key={shoppingCart.id} onRemove={removeProductFromCart} onPay={addtoPayed} />
                    ))}


                </div>
                <button class="btn btn-primary btn-purchase" type="button" onClick={emptyShoppingCart}>
                    Empty Cart
                </button>

                <h2 className='payedh'>Payed items</h2>
                <div class="cart-row">
                    <span class="cart-item cart-header cart-column">ITEM</span>
                    <span class="cart-price cart-header cart-column">PRICE</span>
                    <span class="cart-quantity cart-header cart-column">Doing</span>
                </div>
                

                <div class="cart-items">

                    {payed.map(product => (
                        <PayedCard {...product} key={payed.id}/>
                    ))}


                </div>
                <button class="btn btn-primary btn-purchase" type="button" onClick={emptyPayedcart}>
                    Empty Payed item
                </button>
            </section>
            <footer class="main-footer">
                <div class="container main-footer-container">
                    <h3 class="band-name">Social media links</h3>
                    <ul class="nav footer-nav">
                        {socials.map(social => (
                            <Social {...social} key={socials.id} />
                        ))}
                    </ul>
                </div>
            </footer>


        </>
    )
}