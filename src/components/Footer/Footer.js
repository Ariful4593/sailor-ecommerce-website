import React from 'react';
import './Footer.css';
import paymentOptions from '../../images/payment-options.png';
const footerData = [
    { title: 'KNOW US', listItem: ['Who We Are', 'Sailor Club', 'Brand Social Responsibilities', 'Join Us', 'News & Blog', 'Catalog', 'Archive', 'Store Locator', 'Blog'] },
    {
        title: 'SHOPPING INFORMATION', listItem: ['How To Shop', 'Shipping & Charges', 'Billing & Payment', 'Size Guide', 'Privacy Policy', 'Terms & Conditions']
    },
    {
        title: 'SERVICE INFORMATION', listItem: ['Customer Service', 'Return & Exchange', 'Care & Wash Guide', 'Contact Us']
    },
]
const Footer = () => {
    return (
        <div className="footer-area mt-5">
            <div className="footer-container">
                <div className="row">
                    <div className="col-12 col-sm-4 col-md-3 footer-column">
                        <h3 className="list-title">CONTACT INFO</h3>
                        <p>NINAKABBO, 227/A, TEJGAON I/A,
                            TEJGAON- GULSHAN LINK ROAD,
                            TEJGAON, DHAKA-1208
                        </p>
                        <p className="m-0">+8801777702000</p>
                        <p className="m-0">support@sailor.clothing</p>
                    </div>
                    {
                        footerData.map((items, index) => (
                            <div className="col-12 col-sm-4 col-md-3 footer-column" key={index}>
                                <h3 className="list-title">{items.title}</h3>
                                {
                                    items.listItem.map((listData, index) => (
                                        <p className="m-0" style={{cursor: 'pointer'}} key={index}>{listData}</p>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <img className="w-100" src={paymentOptions} alt="" />
                    </div>
                </div>
            </div>
            <div className="footer-lower mt-5">
                <p className="text-center">Copyright © 2021 Sailor. All rights reserved by Ariful Islam</p>
            </div>
        </div>

    );
};

export default Footer;