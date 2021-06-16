import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faList } from '@fortawesome/free-solid-svg-icons';

import './GridArea.css';
const GridArea = () => {
    return (
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
                    <pre><span>Sort By </span>
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
    );
};

export default GridArea;