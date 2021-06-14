/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './SingleProductPage.css';
import { useParams } from 'react-router-dom';
import collectionsData from '../../../fakeData/collectionsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faAddressCard, faEnvelope } from '@fortawesome/free-solid-svg-icons';
const SingleProductPage = () => {
    const { id } = useParams();
    const sigleProduct = collectionsData.filter(data => data.id === id);

    return (
        <div className="container overview">
            {
                sigleProduct.map((data, index) => (
                    <div className="row mt-5" key={index}>
                        <div className="col-md-6" >
                            <img src={data.img} alt="" />
                        </div>
                        <div className="col-md-6">
                            <h1 className="name">{data.title}</h1>
                            <p className="price"><strong>Price: </strong>{data.price}</p>
                            <label htmlFor="">Size: </label>
                            <div className="size-attributes mt-2">
                                <span className="label label-default">S</span>
                                <span className="label label-primary">M</span>
                                <span className="label label-success">L</span>
                                <span className="label label-info">XL</span>
                                <span className="label label-warning">XXL</span>
                            </div>
                            <hr />
                            <div className="increment-decrement-area">
                                <input type="text" className="text-center" name=""  id="" /> <button className="btn btn-danger">+</button> <button className="btn btn-danger">-</button>
                            </div>
                            <div className="add-to-cart mt-4">
                                <button type="submit">ADD TO CART</button>
                            </div>
                            <div className="whishlist-area">
                                <h4 className="list-area"><FontAwesomeIcon icon={faCog} /> Add to whishlist</h4>
                                <h4 className="list-area"><FontAwesomeIcon icon={faAddressCard} /> Add to comparelist</h4>
                                <h4 className="list-area"><FontAwesomeIcon icon={faEnvelope} /> Email a friend</h4>
                            </div>

                            <div className="social-media-area mt-5">
                                <a href="/" className="">
                                    <span className="flip fa fa-facebook"></span>                                </a>
                                <a href="/" className="">
                                    <span className="flip fa fa-twitter"></span>
                                </a>
                                <a href="/" className="">
                                    <span className="flip fa fa-google"></span>
                                </a>
                                <a href="/" className="">
                                    <span className="flip fa fa-linkedin"></span>
                                </a>
                                <a href="/" className="">
                                    <span className="flip fa fa-youtube"></span>
                                </a>
                            </div>
                        </div>

                    </div>
                ))
            }
        </div>
    );
};

export default SingleProductPage;