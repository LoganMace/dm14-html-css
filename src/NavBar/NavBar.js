import React from "react";
import './NavBar.css';

export default function NavBar(){
  return (
  <nav>
    <ul className="nav-container">
      <li className="nav-links">BOOKS</li>
      <li className="nav-links">PODCAST</li>
      <li className="nav-links">WORKSHOPS</li>
      <li className="nav-links">CONVERSATIONS</li> 
    </ul>
  </nav>
  )
}