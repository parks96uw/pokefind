import React from 'react';

import logo from '../images/PokeFind.png';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="poke-header ui secondary pointing menu">
            <Link to="/" className="item">
                <img className="header-image" src={logo} alt="pokemon-search" />
            </Link>
            <Link to="/search" className="item">Search</Link>
            <Link to="/browse" className="item">Browse</Link>
            <div className="right menu">
            </div>
            {/* <img className="header-image" src={logo} alt="pokemon-search" /> */}
        </div>
    )
}

export default Header;