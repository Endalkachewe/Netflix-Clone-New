import React from "react";
import logo from "../../assets/netflix.png"
import "./Header.css";
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";


function Header() {
  return (
    <div className='header-outer-container'>
      <div className='header-container'>
        <div className='header-left'>
           <ul>
            <li><img src={logo} alt="" /></li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Language</li>
           </ul>       
        </div>
        <div className='header-right'>
            <ul>
                <li><IoSearch /></li>
                <li><IoMdNotificationsOutline /></li>
                <li><MdOutlineAccountCircle /></li>
                <li><IoMdArrowDropdown /></li>
            </ul>        
        </div>
      </div>
    </div>
  )
}

export default Header
