import React from 'react';
import './homePage.css';

import homepage from '../../images/home_page.png'
const HomePage = () => {
    return (<div className='homepage'>
        <button className='signin'>Sign in</button><button className=''>Sign up</button>
        {/* <Image src={homepage}  alt="asd" title="QW"></Image> */}
        <img src={homepage} alt="" />
    </div>);

};

export default HomePage;