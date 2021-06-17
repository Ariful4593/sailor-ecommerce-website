import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './HeaderLower.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faBars, faCog, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { getDatabaseCart } from '../../../utilities/databaseManager';



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const HeaderLower = () => {
    const classes = useStyles();
    const cardIndex = getDatabaseCart();
    let key, count = 0;
    for (key in cardIndex) {
        if (cardIndex.hasOwnProperty(key))
            count++;
    }
    return (
        <div className="header-lower-area">
            <div className="row" id="search-addCart-area">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Search" />
                    </form>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">

                        <Link className="navbar-brand" to="/cart"><FontAwesomeIcon icon={faCartPlus} /> TOTAL CART {`(${count})`}</Link>
                    </div>
                </nav>
            </div>

            <div className="row" id="header-two">
                <div className="col-12 header-low-ul" id="header-one">
                    <ul className="">
                        <li><a href="/">CRAZY DEALS</a></li>
                        <li><Link to="/mens">MEN</Link></li>
                        <li><Link to="/womens">WOMEN</Link></li>
                        <li><Link to="/kids">KIDS</Link></li>
                        <li><Link to="/newborn">NEWBORN</Link></li>
                    </ul>
                </div>
                <div className="col-12 header-low-ul" id="nav-icon-area">
                    <ul className="">
                        <li><Link to="/"><FontAwesomeIcon icon={faBars} /></Link></li>
                        <li><Link to="/mens"><FontAwesomeIcon icon={faCog} /></Link></li>
                        <li><Link to="/kids"><FontAwesomeIcon icon={faUser} /></Link></li>
                        <li><Link to="/newborn"><FontAwesomeIcon icon={faSearch} /></Link></li>
                        <li><Link to="/cart"><FontAwesomeIcon icon={faCartPlus} /></Link></li>
                    </ul>
                </div>
            </div>

        </div>

    );
};

export default HeaderLower;