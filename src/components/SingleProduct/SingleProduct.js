import React from 'react';
import Header from '../Header/Header';
import NewsLetter from '../NewsLetter/NewsLetter';
import Footer from '../Footer/Footer';
import SingleProductPage from './SingleProductPage/SingleProductPage';
const SingleProduct = () => {
    return (
        <div>
            <Header/>
            <SingleProductPage/>
            <NewsLetter />
            <Footer/>
        </div>
    );
};

export default SingleProduct;