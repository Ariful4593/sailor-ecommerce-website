import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart, faBars, faCartPlus, faThLarge, faList } from '@fortawesome/free-solid-svg-icons';
import womenCollectionsData from '../../../../fakeData/womenCollectionsData';
import './WomenCollectionPage.css';
const WomenCollectionsPage = () => {
    return (
        <div className="womens-collection-page">
                <div className="row">
                    <div className="main-title">
                        <h1>WOMENS COLLECTIONS</h1>
                        <hr />
                    </div>
                    <div className="col-md-3 title">
                        <strong>RECENTLY VIEWED PRODUCTS</strong>
                    </div>
                    <div className="col-md-9 grid-main-area">
                        <div className="container">
                            <div className="row product-selectors">
                                <div className="col-md-4">
                                    <pre><span>Display</span> <select name="display" id="displayCard">
                                        <option value="9">9</option>
                                        <option value="18">18</option>
                                        <option value="27">27</option>
                                        <option value="36">36</option>
                                    </select>  <span>Per Page</span>
                                    </pre>
                                </div>
                                <div className="col-md-4 grid-layer-area">
                                    <pre><span>View As </span> <button className="grid"><FontAwesomeIcon icon={faThLarge} /></button> <button className="list"><FontAwesomeIcon icon={faList} /></button></pre>
                                </div>
                                <div className="col-md-4 sort-element">
                                    <pre><span>Sort By  </span>
                                        <select name="sortList" id="sortBy">
                                            <option value="Newest">Newest</option>
                                            <option value="Position">Position</option>
                                            <option value="Name: A to Z">Name: A to Z</option>
                                            <option value="Name: Z to A">Name: Z to A</option>
                                            <option value="Price: Low to High">Price: Low to High</option>
                                            <option value="Price: High to Low">Price: High to Low</option>
                                        </select>
                                    </pre>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row mt-3">
                                {
                                    womenCollectionsData.map((card, index) => (
                                        <div className="col-12 col-sm-6 col-md-4 product mt-3" key={index}>
                                            <img src={card.img} className="card-img-top" alt="..." />
                                            <div className="card-body product-card">
                                                <h5 className="card-title">{card.title}</h5>
                                                <p className="card-text text-danger font-weight-bold">{card.price}</p>
                                            </div>

                                            <ul className="icon-area">
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
                        
                    </div>
                </div>
            </div>
    );
};

export default WomenCollectionsPage;