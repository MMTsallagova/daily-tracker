// TODO: Add REACT component with picture on top of page
import React from 'react';
import headerBG from "../assets/ref.png"
import "./Header.css"

class Header extends React.Component {
    render() {
       return(
           <div className="headerBGContainer">
               <img
                   className="headerImage"
                   src={headerBG}
                   alt="Header Image"
               />
               {/* TODO: add icon */}
               {/*TODO: add header of page */}
           </div>
       )
    }

}

export default Header;
