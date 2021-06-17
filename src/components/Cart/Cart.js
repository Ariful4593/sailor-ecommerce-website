import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NewsLetter from '../NewsLetter/NewsLetter';
import CartData from './CartData/CartData';

const Cart = () => {
    return (
        <div>
            <Header />
            <CartData />
            <NewsLetter />
            <Footer />
        </div>
    );
};

export default Cart;