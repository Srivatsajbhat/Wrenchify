import React from 'react'
import './header.css'
import { RiMenu4Fill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <div className='body'>
    <div className="wrapper">
      <nav className='header-nav'>
        <a href="/" className="logo">WrenchiFy</a>
        <input type="checkbox" name="" id="toggle"/>
        <label for="toggle"><i className="material-icons"><RiMenu4Fill /></i></label>
        <div className="menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/service">Services</a></li>
            <li><a href="/subscription">Subscription</a></li>
            <li><a href="/profile"><FaUserCircle /></a></li>
          </ul>
        </div>
      </nav>
    </div>
    </div>
  )
}

export default Header
