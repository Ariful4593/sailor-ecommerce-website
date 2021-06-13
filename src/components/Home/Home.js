import React from 'react';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import HomeDelivery from '../HomeDelivery/HomeDelivery';
import Footer from '../Footer/Footer';
import Blog from '../Blog/Blog';
import Instagram from '../Instagram/Instagram';
import NewsLetter from '../NewsLetter/NewsLetter';
import MensAndWomens from '../MensAndWomens/MensAndWomens';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import BoysAndGirls from '../BoysAndGirls/BoysAndGirls';
const Home = () => {
    return (
        <div>
            <Header />
            <Slider />
            <HomeDelivery />
            <MensAndWomens />
            <FeaturedProducts />
            <BoysAndGirls />
            <Blog />
            <Instagram />
            <NewsLetter />
            <Footer />
        </div>
    );
};

export default Home;