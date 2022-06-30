import './navbar.css';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {

  return (
  <div className="navbar">
    <div>
    <img src={require('./logo.png')} alt= "logo" className="logo" />
    </div>
  <div id="desktopnav">
  <NavLink to="/" activeClassName= "active">
    &nbsp; Home
    &nbsp;</NavLink>
  <NavLink to="/all-plants" activeClassName= "active">
    &nbsp; All Plants
    &nbsp;</NavLink>
  <NavLink to="/about" activeClassName= "active">
    &nbsp; About Us
    &nbsp;</NavLink>
  <NavLink to="/contact" activeClassName= "active">
    &nbsp; Contact
    &nbsp;</NavLink>
</div>
<div className="mobile-navbar">
  <div className="dropdown">
    <div className="dropdown-content">
      <NavLink to="/" activeClassName= "active">Home</NavLink>
      <NavLink to="/all-plants" activeClassName= "active">All Plants</NavLink>
      <NavLink to="/contact" activeClassName= "active">Contact</NavLink>
      <NavLink to="/about" activeClassName= "active">About</NavLink>
    </div>
  </div>
</div>
<div>
    <img src={require('./number.jpg')} alt= "number" className="number" />
</div>
</div>
)
};