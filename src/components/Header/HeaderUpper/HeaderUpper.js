import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/sailor.png';
import './HeaderUpper.css';
const HeaderUpper = () => {
    return (
        <div className="header-upper-area pt-4">
            <div className="row">
                <div className="col-md-4" id="contact-number">
                    <h5 className="">Need Help: +8801777702000</h5>
                </div>
                <div className=" header-logo">
                    <Link to="/"><img className="logo" src={logo} alt="" /></Link>
                </div>
                <div className="col-md-4" id="whishlist-area">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle font-weight-bold" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Myaccount
                            </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="/">Login</a>
                                        <a className="dropdown-item" href="/">Register</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item bg-light" href="/">Login with facebook</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link font-weight-bold" href="/" >Whishlist (0)</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default HeaderUpper;