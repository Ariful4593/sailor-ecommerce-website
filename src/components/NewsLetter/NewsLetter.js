import React from 'react';
import './NewsLetter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const NewsLetter = () => {
    return (
        <div className="newsLetter-area">
            <div className="row">
                <div className="col-12 sub-newsletter-area">
                    <h3>NEWSLETTER</h3>
                    <p><i>Keep yourself updated with the latest Sailor News, Fashion Updates and Blogs! Subscribe here! It’s simple</i></p>
                    <button className="btn"><FontAwesomeIcon icon={faEnvelope} /> {`SUBSCRIBE`}</button>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;