import React from 'react';
import './BoysAndGirls.css';
import boysCollection from '../../images/collection/Boys collection.jpeg';
import girlsCollection from '../../images/collection/Girls collection.jpeg';
const BoysAndGirls = () => {
    return (
        <div className="container">
            <div className="row boys-girl-collections">
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 mt-4">
                    <img className="w-100 h-100" src={boysCollection} alt="" />
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 mt-4">
                    <img className="w-100 h-100" src={girlsCollection} alt="" />
                </div>
            </div>
        </div>
    );
};

export default BoysAndGirls;