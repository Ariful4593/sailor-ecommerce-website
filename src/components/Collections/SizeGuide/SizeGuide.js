import React from 'react';
import sizeGuideImage from '../../../images/size-guide/T-Shirt-01.jpg';
import './SizeGuide.css';
const SizeGuide = () => {
    return (
        <div className="container size-guide">
            <div className="row">
                <h1 className="text-center">SIZE GUIDE</h1>
                <div className="col-12 text-center">
                    <img src={sizeGuideImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SizeGuide;