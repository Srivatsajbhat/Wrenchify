import React from 'react'
import './header.css'
import { RiMenu4Fill } from "react-icons/ri";

function Header() {
  return (
    <div className='body'>
    <div class="wrapper">
      <nav className='header-nav'>
        <a href="#" class="logo">WrenchiFy</a>
        <input type="checkbox" name="" id="toggle"/>
        <label for="toggle"><i class="material-icons"><RiMenu4Fill /></i></label>
        <div class="menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Subscription</a></li>
          </ul>
        </div>
      </nav>
    </div>
    </div>
  )
}

export default Header
