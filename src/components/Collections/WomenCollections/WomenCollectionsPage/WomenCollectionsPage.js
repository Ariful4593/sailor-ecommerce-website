import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart, faBars, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import collectionsData from '../../../../fakeData/collectionsData';
import './WomenCollectionPage.css';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import GridArea from '../../GridArea/GridArea';
const WomenCollectionsPage = () => {

    const { location: { pathname } } = useHistory();
    const filterData = collectionsData.filter(data => data.type === pathname);
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
                    <GridArea/>
                    <div className="container">
                        <div className="row mt-3">
                            {
                                filterData.map((card, index) => (

                                    <div className="col-12 col-sm-6 col-md-4 product mt-3" key={index}>
                                        <Link to={`/singleProduct/${card.id}`}>
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
                                        </Link>
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