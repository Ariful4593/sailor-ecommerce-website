import React from 'react';
import BoysAndGirls from './BoysAndGirls/BoysAndGirls';
import './Collections.css';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import MensAndWomens from './MensAndWomens/MensAndWomens';
const Collections = () => {
    return (
        <div className="container mt-4">
            <MensAndWomens />
            <FeaturedProducts />
            <BoysAndGirls />
        </div>
    );
};

export default Collections;