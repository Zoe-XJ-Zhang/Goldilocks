import React from 'react';
import './homePage.css';
import about '../../images/about us.png'
const aboutPage = () => {
    return (<div className='about'>
        {/* <Image src={homepage}  alt="asd" title="QW"></Image> */}
        <img src={about} alt="" />
    </div>);

};

export default aboutPage;