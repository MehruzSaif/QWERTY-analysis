import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='container nav-bar mt-3'>
                <CustomLink className='custom-link' to="/">HOME</CustomLink>
                <CustomLink className='custom-link' to="/reviews">REVIEWS</CustomLink>
                <CustomLink className='custom-link' to="/dashboard">DASHBOARD</CustomLink>
                <CustomLink className='custom-link' to="/blogs">BLOGS</CustomLink>
                <CustomLink className='custom-link' to="/about">ABOUT</CustomLink>
            </nav>
        </div>
    );
};

export default Header;