import React from 'react';
import Menu from './menu';
import Banner from './Banner';
import Info from './Info';
import "./../../styles/Home.css";

const Home = () => {
    return(
        <div className = "home-container">
            <Banner />
            <Menu />
            <Info />
        </div>
    );
};

export default Home;