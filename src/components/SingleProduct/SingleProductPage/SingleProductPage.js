/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './SingleProductPage.css';
import { useParams } from 'react-router-dom';
import collectionsData from '../../../fakeData/collectionsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faAddressCard, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ReactImageMagnify from 'react-image-magnify';
import { useState, useEffect, useContext } from 'react';
import { gridContext } from '../../../App';
import { addToDatabaseCart } from '../../../utilities/databaseManager';

const SingleProductPage = () => {
    const { id } = useParams();
    const { value5 } = useContext(gridContext)
    const singleProduct = collectionsData.filter(data => data.id === id);

    const [counter, setCounter] = useState(1);
    const [product, setProduct] = value5;
    useEffect(() => {
        setProduct(singleProduct);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setProduct])

    useEffect(() => {
        const newProduct = [...product];
        newProduct.counter = counter;
        setProduct(newProduct);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const handleCounter = (count) => {
        const currentCounter = counter;
        var newCounter;
        if (count === '+') {
            newCounter = currentCounter + 1;
        } else {
            newCounter = currentCounter > 1 ? currentCounter - 1 : currentCounter
        }
        setCounter(newCounter);
        const orderedProduct = [...product];
        orderedProduct.counter = newCounter;
        setProduct(orderedProduct)

    }
    const counterStyle = { cursor: 'pointer', fontSize: '16px', padding: '7px', };
    const counterInputStyle = { width: '40px', height: '35px', padding: '0', margin: '0', textAlign: 'center', borderRadius: '10px', background: 'white' }

    const handleAddProduct = (key) => {
        addToDatabaseCart(key, counter)
    }


    return (
        <div className="container overview">

            {
                singleProduct.map((data, index) => (
                    <div className="row mt-5 " key={index}>
                        <div className="col-md-6 single-product">
                            <ReactImageMagnify
                                className="magnify"
                                {...{
                                    smallImage: {
                                        alt: 'Wristwatch by Ted Baker London',
                                        isFluidWidth: true,
                                        src: data.img,

                                    },
                                    largeImage: {
                                        src: data.img,
                                        width: 1200,
                                        height: 1800,

                                    }
                                }} />
                        </div>

                        <div className="col-md-6 single-product ">
                            <h1 className="name">{data.title}</h1>
                            <p className="price"><strong>Price: </strong>{data.price}৳</p>
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
                                <button className="btn btn-danger" type="button">
                                    <span className="minus-btn " style={counterStyle} onClick={() => handleCounter('-')}>-</span>
                                    <input style={counterInputStyle} type="text" disabled value={counter} />
                                    <span className="plus-btn" style={counterStyle} onClick={() => handleCounter('+')}>+</span>
                                </button>
                            </div>
                            <div className="add-to-cart mt-4">
                                <button type="submit" onClick={() => handleAddProduct(data.id)}>ADD TO CART</button>
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