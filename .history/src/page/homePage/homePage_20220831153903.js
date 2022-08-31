import React from 'react';
import './homePage.css';

import homepage from '../../ima'
const HomePage = () => {
    return (<div className='homepage'>
        <button className='signin'>Sign in</button><button className='signup'>Sign up</button>
        {/* <Image src={homepage}  alt="asd" title="QW"></Image> */}
        <img src={homepage} alt="" />
    </div>);

};

export default HomePage;