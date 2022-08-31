import React from 'react';
import './homePage.css';
import { Image } from 'antd';
import homepage from './home-page.png'
const HomePage = () => {
    return (<div className='homepage'>
        <Image src=  alt="asd" title="QW"></Image>
        <img src={homepage} alt="" />
    </div>);

};

export default HomePage;