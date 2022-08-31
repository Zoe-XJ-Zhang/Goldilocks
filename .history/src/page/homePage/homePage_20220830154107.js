import React from 'react';
import './homePage.css';
import { Image } from 'antd';
const HomePage = () => {
    return (<div className='homepage'>
        <Image src='./home-page.png' width={200} alt="asd" title="QW"></Image>
        <img src="./home-page.png" alt="" />
    </div>);

};

export default HomePage;