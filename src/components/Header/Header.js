import React from 'react';

import logo from '../images/PokeFind.png';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="poke-header ui fixed menu">
            <div className="header-image-container">
                <Link to="/">
                    <img className="header-image" src={logo} alt="pokemon-search" />
                </Link>
            </div>
            <div className="right menu">
                <Link to="/browse" className="item">Browse</Link>
                <Link to="/search" className="item">Search</Link>
            </div>
        </div>
    )
}

export default Header;