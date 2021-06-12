import React from 'react';
import HeaderLower from './HeaderLower/HeaderLower';
import HeaderUpper from './HeaderUpper/HeaderUpper';
import './Header.css';

const Header = () => {
    return (
        <div className="main-header">
            <HeaderUpper></HeaderUpper>
            <HeaderLower></HeaderLower>
        </div>
    );
};

export default Header;