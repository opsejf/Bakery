import React from 'react';
import '../Styles/navbar.css';
import logo from '../Images/logo.png';
import search from '../Images/search.png';
import basket from '../Images/basket.png';
import account from '../Images/sign-in.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return(
        <nav className='navbarWrapper'>
            <ul className='items'>
                <li className='item'id='firstNav'><img className='logoNavbar' src={logo} /></li>
                <li className='item'><Link to="/cupcakes" className='links'>Cupcakes</Link></li>
                <li className='item'><Link to="/cookies" className='links'>Cookies</Link></li>
                <li className='item'><Link to="/bread" className='links'>Bread</Link></li>
                <li className='item'><Link to="/pastries" className='links'>Pastries</Link></li>
                <li className='item' id='lastNav'><Link to="/orders" className='links'>Orders</Link></li>
                <li className='item'><img className='icons' src={search}/></li>
                <li className='item'><Link to="/basket" className='links'><img className='icons' src={basket}/></Link></li>
                <li className='item'><Link to="/sign-in" className='links'><img className='icons' src={account}/></Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;