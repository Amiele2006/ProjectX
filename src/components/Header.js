import React from 'react';

import ProjectX from '../assets/images/Frame 8.png';
import Dropdown from "../components/Dropdown";

function Header(){

   return(
        <header className="flex justify-between content-center w-full p-7 pr-4" id="header-x" >
            <img src={ProjectX} alt="logo" id="projectx"/>
            <div className="dropdown">
              <Dropdown />
            </div>
        </header>
    )
}

export default Header;