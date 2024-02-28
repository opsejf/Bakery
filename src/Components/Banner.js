import React from 'react';
import banner from '../Images/bakery-bread-banner.jpg';
import '../Styles/banner.css';


const Banner = () => {
    return(
        <div className='image-container'>
            <img src={banner} className='banner'/>
            <div className='text-overlay'>
                Voted Best Bakery in Britain 3 Years Running
            </div>
            <div className='text-overlay2'>
                SHOP NOW &gt;
            </div>
        </div>
    )
};

export default Banner;