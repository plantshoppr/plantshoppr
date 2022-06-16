import './navbar.css';

export const Navbar = () => {
  var btns = document.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(e) {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    e.preventDefault();
    });
  }
  return (
  <div className="navbar">
    <div>
    <img src={require('./logo.png')} alt= "logo" className="logo" />
    </div>
  <div id="desktopnav">
  <ul>
  <li><a href="/" className="active btn">Home</a></li>
  <li><a href="all-plants" className= "btn">All Plants</a></li>
  <li><a href="contact" className= "btn">Contact</a></li>
  <li><a href="about" className= "btn">About</a></li>
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
      <a href="/contact">Contact</a>
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
