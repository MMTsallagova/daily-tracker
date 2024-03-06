// TODO: Add REACT component with picture on top of page
import React from 'react';
import headerBG from "../assets/ref.png"
import iconImg from "../assets/headerIcon.jpg"
import "./Header.css"

class Header extends React.Component {
    render() {
        return (
            <div className="top-header-container">
                <div className="header-bg-container">
                    <img
                        className="header-image"
                        src={headerBG}
                        alt="Header Image"
                    />
                </div>
                <div className="icon-img-container">
                    <img
                        className="icon-image"
                        src={iconImg}
                        alt="Icon Image"
                    />
                </div>
                <div className="app-title">
                    <h1>Study</h1>
                </div>
            </div>

        )
    }

}

export default Header;
