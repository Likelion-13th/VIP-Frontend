import React from 'react';
import '../styles/Header.css';
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const currentPage = location.pathname;
    return(
            <div className={`header-container ${currentPage === "/Mypage" ? "mypage-banner" : ""}`}>
            <div className="header-section">
                <div className="header-left">
                    <div className="info2-text-wrapper">
                        <div className="info2-text-1">
                            <Link to="/" className={currentPage==="/" ? "active" : ""}>Likelion</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-section">
                <div className="header-right">
                    <div className="info2-text-2">
                        <Link to="/New" className={currentPage==="/New" ? "active" : ""}>New</Link>
                    </div>
                    <div className="info2-text-3">
                        <Link to="/Perfume" className={currentPage==="/Perfume" ? "active" : ""}>Perfume</Link>
                    </div>
                    <div className="info2-text-4">
                        <Link to="/Diffuser" className={currentPage==="/Diffuser" ? "active" : ""}>Diffuser</Link>
                    </div>
                    <div className="info2-text-5">
                        <Link to="/Mypage" className={currentPage==="/Mypage" ? "active" : ""}>Mypage</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;