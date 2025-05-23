import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => {
    return (
    <div className="menu-container">
        <Link to='/perfume' className="menu-section">
            <img
                src={`${process.env.PUBLIC_URL}/image/banner_perfume.png`}
                alt="perfume"
                className="menu-perfume"
            ></img>
            <div className="text-overlay text-perfume">Perfume</div>
        </Link>
        <Link to='/diffuser' className="menu-section">
            <img
                src={`${process.env.PUBLIC_URL}/image/banner_diffuser.jpg`}
                alt="perfume"
                className="menu-perfume"
            ></img>
            <div className='text-overlay text-diffuser'>Diffuser</div>
        </Link>
    </div>
    );
};

export default Menu;