import React from 'react';
import './FeaturedProducts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faHeart, faBars, faCartPlus } from '@fortawesome/free-solid-svg-icons'

import featureImageOne from '../../../images/feature-image/1.jpeg';
import featureImageTwo from '../../../images/feature-image/2.jpeg';
import featureImageThree from '../../../images/feature-image/3.jpeg';
import featureImageFour from '../../../images/feature-image/4.jpeg';
import featureImageFive from '../../../images/feature-image/5.jpeg';

const arrayImage = [
    { title: 'Mens Knit Casual Shirt', price: '1,440.00৳', img: featureImageOne }, { title: 'Womens Woven Long Kurtis', price: '2,350.00৳', img: featureImageTwo }, { title: 'Men’s Denim Casual Shirt', price: '586.00৳', img: featureImageThree }, { title: 'Womens Grown-up Glam Kurti', price: '2,550.00৳', img: featureImageFour }, { title: 'Mens Smart Casual Shirt', price: '2,390.00৳', img: featureImageFive }
]
const FeaturedProducts = () => {
    return (
        <div className="container">
            <div className="row featured-product">
                <div className="title">
                    <strong>FEATURED PRODUCTS</strong>
                    <hr />
                </div>
                {
                    arrayImage.map((items, index) => (
                        <div className="col-12 col-sm-6 col-md-4 product" key={index}>
                            <img src={items.img} className="card-img-top" alt="..." />
                            <div className="card-body product-card">
                                <h5 className="card-title">{items.title}</h5>
                                <p className="card-text text-danger font-weight-bold">{items.price}</p>
                            </div>

                            <ul className="featured-icon-area">
                                <li><FontAwesomeIcon icon={faEye} /></li>
                                <li><FontAwesomeIcon icon={faHeart} /></li>
                                <li><FontAwesomeIcon icon={faBars} /></li>
                                <li><FontAwesomeIcon icon={faCartPlus} /></li>
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>

    );
};

export default FeaturedProducts;