import React from 'react';
import mensCollection from '../../images/collection/mens-collections.png';
import womensCollections from '../../images/collection/womens-collections.png';
const MensAndWomens = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 mt-4 mens-and-womens">
                    <img className="w-100 h-100" src={mensCollection} alt="" />
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 mt-4 mens-and-womens">
                    <img className="w-100 h-100" src={womensCollections} alt="" />
                </div>
            </div>
        </div>
    );
};

export default MensAndWomens;