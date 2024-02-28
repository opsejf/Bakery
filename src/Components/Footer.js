import React from 'react';
import FB from '../Images/facebook.png'
import '../Styles/footer.css';



const Footer = () => {
    return(
        <div className='footer'>
            <a href="https://facebook.com"><img src={FB}></img></a>
        </div>
    )
}

export default Footer;