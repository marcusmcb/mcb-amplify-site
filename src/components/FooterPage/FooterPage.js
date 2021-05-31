import React from 'react';

import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

import './footerpage.css';

const FooterPage = () => {
    return (
        <div className='footer-page'>            
            <Navbar/>
            <h1 className='footer-page-text'>HERE</h1>
            <Footer/>
        </div>
    )
}

export default FooterPage;
