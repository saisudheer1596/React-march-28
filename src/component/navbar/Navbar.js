import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"



const Navbar = ({isLoggedIn, onLogout}) =>{
  return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand " href="#">Online Shopping</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink to="/" className="nav-link">Home </NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/AboutUs" className="nav-link">About Us </NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/ContactUs" className="nav-link">Contact Us </NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/ProductCard" className="nav-link">ProductCard </NavLink>
        </li>
      </ul>
        <li className="nav-item">
        {isLoggedIn ? (
          <button onClick={onLogout} className='btn btn-primary'>Logout</button>
        ) : (
          <NavLink to="/login" className="btn btn-primary">Login</NavLink>
        )}
        </li>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>  
  </div>
</nav>
};
export default  Navbar;