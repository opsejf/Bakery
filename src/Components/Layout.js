import React from 'react';
import Navbar from './Navbar.js';
import Banner from './Banner.js';
import Footer from './Footer.js';
import { Outlet } from 'react-router-dom';
import '../Styles/layout.css';


const Layout = () => {
    return(
        <>
        <header>
            <Navbar />
            <Banner />
        </header>
        <body>
            <section className='bodyFormat'>
                <Outlet />
            </section>
            

        </body>
        <footer>
            <Footer />
        </footer>
        </>
    )

}

export default Layout;