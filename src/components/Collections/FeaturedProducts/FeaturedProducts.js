import React from 'react';
import './FeaturedProducts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faHeart, faBars, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link, useHistory } from 'react-router-dom';
import collectionsData from '../../../fakeData/collectionsData';

const FeaturedProducts = () => {

    const { location: { pathname } } = useHistory();

    const filterData = collectionsData.filter(data => data.type === pathname);
    return (
        <div className="container">
            <div className="row featured-product">
                <div className="title">
                    <strong>FEATURED PRODUCTS</strong>
                    <hr />
                </div>
                {
                    filterData.map((items, index) => (
                        <div className="col-12 col-sm-6 col-md-4 feature-product-item" key={index}>
                            <Link to={`/singleProduct/${items.id}`}>
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
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>

    );
};

export default FeaturedProducts;