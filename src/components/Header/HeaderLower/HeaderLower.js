import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './HeaderLower.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faBars, faCog, faUser, faSearch } from '@fortawesome/free-solid-svg-icons'

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
    return (
        <div className="container">
            <div className="row" id="search-addCart-area">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Search" />
                    </form>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">

                        <a className="navbar-brand" href="/"><FontAwesomeIcon icon={faCartPlus} /> ADD CART </a>
                    </div>
                </nav>
            </div>

            <div className="row" id="header-two">
                <div className="col-12 header-low-ul" id="header-one">
                    <ul className="">
                        <li><a href="/">CRAZY DEALS</a></li>
                        <li><a href="/">MEN</a></li>
                        <li><a href="/">WOMEN</a></li>
                        <li><a href="/">KIDS</a></li>
                        <li><a href="/">NEWBORN</a></li>
                    </ul>
                </div>
                <div className="col-12 header-low-ul" id="nav-icon-area">
                    <ul className="">
                        <li><a href="/"><FontAwesomeIcon icon={faBars} /></a></li>
                        <li><a href="/"><FontAwesomeIcon icon={faCog} /></a></li>
                        <li><a href="/"><FontAwesomeIcon icon={faUser} /></a></li>
                        <li><a href="/"><FontAwesomeIcon icon={faSearch} /></a></li>
                        <li><a href="/"><FontAwesomeIcon icon={faCartPlus} /></a></li>
                    </ul>
                </div>
            </div>

        </div>

    );
};

export default HeaderLower;