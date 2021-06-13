import React from 'react';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import HomeDelivery from '../HomeDelivery/HomeDelivery';
import Collections from '../Collections/Collections';
import Footer from '../Footer/Footer';
import Blog from '../Blog/Blog';
import Instagram from '../Instagram/Instagram';
import NewsLetter from '../NewsLetter/NewsLetter';
const Home = () => {
    return (
        <div>
            <Header/>
            <Slider/>
            <HomeDelivery/>
            <Collections/>
            <Blog/>
            <Instagram/>
            <NewsLetter/>
            <Footer/>
        </div>
    );
};

export default Home;