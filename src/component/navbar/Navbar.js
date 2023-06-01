import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"


export default function Navbar() {
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
        <NavLink to="/login" className="nav-link">Login</NavLink>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>  
  </div>
</nav>
}
