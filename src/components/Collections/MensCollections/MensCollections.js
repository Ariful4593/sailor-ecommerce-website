import React from 'react';
import Header from '../../Header/Header';
import crazyDeals from '../../../images/crazy-deals/crazy-deal.jpeg';
import MensCollectionsPage from './MensCollectionsPage/MensCollectionsPage';
import NewsLetter from '../../NewsLetter/NewsLetter';
import Footer from '../../Footer/Footer';
const MensCollections = () => {
    return (
        <div>
            <Header/>
            <div>
                <img className="w-100" src={crazyDeals} alt="" />
            </div>
            <MensCollectionsPage/>
            <NewsLetter />
            <Footer/>
        </div>
    );
};

export default MensCollections;