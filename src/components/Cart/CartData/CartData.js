import React from 'react';
import { useEffect } from 'react';
import { getDatabaseCart } from '../../../utilities/databaseManager';
import collectionsData from '../../../fakeData/collectionsData';
import { useState } from 'react';
import CardArea from '../CardArea';
import './CartData.css';
const CartData = () => {

    const [cart, setCart] = useState([])

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = collectionsData.find(pd => pd.id === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    }, []);

    return (
        <div className="container product-container">
            <div className="row">
                <div className="col-sm-6 col-md-8 product-area" >
                    {
                        cart.map((data, index) => (

                            <div className="row product-details" key={index}>
                                <div className="col-md-5">
                                    <img className="w-100" src={data.img} alt="" />
                                </div>
                                <div className="col-md-7">
                                    <h4 className="name">{data.title}</h4>
                                    <p className="price"><strong>Price: </strong>{data.price}৳</p>
                                    <p className="quantity"><strong>Quantity: </strong>{data.quantity}</p>
                                </div>
                            </div>

                        ))
                    }
                </div>
                <div className="col-sm-6 col-md-4 cart-area">
                    <CardArea cart={cart} />
                </div>
            </div>
        </div>
    );
};

export default CartData;