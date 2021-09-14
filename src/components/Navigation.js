import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';

const Navigation = () => {
   
    const {openCart, checkout} = useContext(ShopContext)

    return (
        <nav className='navbar'>
            <Link to='/'>Shop</Link>
            <a href={checkout.webUrl}>Checkout</a>
        </nav>
    )
    
}

export default Navigation
