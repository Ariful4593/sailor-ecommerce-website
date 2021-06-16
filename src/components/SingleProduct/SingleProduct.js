import React from 'react';
import Header from '../Header/Header';
import NewsLetter from '../NewsLetter/NewsLetter';
import Footer from '../Footer/Footer';
import SingleProductPage from './SingleProductPage/SingleProductPage';
import SizeGuide from '../Collections/SizeGuide/SizeGuide';
const SingleProduct = () => {
    return (
        <div>
            <Header/>
            <SingleProductPage/>
            <SizeGuide/>
            <NewsLetter />
            <Footer/>
        </div>
    );
};

export default SingleProduct;