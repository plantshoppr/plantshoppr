import './navbar.css';

export const Navbar = () => {
  return (
  <div className="navbar">
    <div>
    <img src={require('./logo.png')} alt= "logo" className="logo" />
    </div>
  <div className="desktopnav">
  <ul>
  <li><a className="active" href="/">Home</a></li>
  <li><a href="all-plants">All Plants</a></li>
  <li><a href="contact">Contact</a></li>
  <li><a href="about">About</a></li>
</ul>
</div>
<div className="mobile-navbar">
  <div className="dropdown">
    <button className="dropbtn">Dropdown
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <a href="/">Home</a>
      <a href="/all-plants">All Plants</a>
      <a href="/contacts">Contact</a>
      <a href="/about">About</a>
    </div>
  </div>
  <div className="one"></div>
  <div className="two"></div>
  <div className="three"></div>
</div>
<div>
    <img src={require('./number.jpg')} alt= "number" className="number" />
</div>
</div>
);
};
