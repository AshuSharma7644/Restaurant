import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
     {/* <div className='main'>
      <div className='inner-main'>
      <div className='logo'><h2><span className='logo-first'>Arvind</span> Sharma</h2></div>
      <div className='menus'>
      <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About Us</NavLink></li>
          <li className="end-contact"><NavLink to='/contact' >Contact us</NavLink></li>
        </ul>
      </div>
        
      </div>
    </div> */}
   




<nav className="navbar navbar-expand-lg navbar-light custom-nav">
  <div className="container main-header px-0">
    {/* <NavLink className="navbar-brand" to="/"><h2><span className='logo-first'>Arvind</span> Sharma</h2></NavLink> */}
    <NavLink className="navbar-brand" to="/"><img src="images/logo_my.png" alt="Logo" /></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 ">
        <li className="nav-item">
          <NavLink className="nav-link menu-a" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link menu-a" to="/about">About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link menu-a" to="/contact">Contact Us</NavLink>
        </li>

        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/sign-up">Sign Up</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/blog">Blog Details</NavLink>
        </li> */}
       
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    
  </>
  )
}
export default Header