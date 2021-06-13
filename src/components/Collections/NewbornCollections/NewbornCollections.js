import React from 'react';
import crazyDeals from '../../../images/crazy-deals/crazy-deal.jpeg';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import NewsLetter from '../../NewsLetter/NewsLetter';
import NewbornCollectionsPage from './NewbornCollectionsPage/NewbornCollectionsPage';

const NewbornCollections = () => {
    return (
        <div>
            <Header />
            <div>
                <img className="w-100" src={crazyDeals} alt="" />
            </div>
            <NewbornCollectionsPage />
            <NewsLetter />
            <Footer />
        </div>
    );
};

export default NewbornCollections;