import './navbar.css';

export const Navbar = () => {
  return (
  <div class="navbar">
    <div>
    <img src={require('./logo.png')} alt= "logo" class="logo" />
    </div>
<ul>
  <li><a class="active" href="home">Home</a></li>
  <li><a href="all-plants">All Plants</a></li>
  <li><a href="contact">Contact</a></li>
  <li><a href="about">About</a></li>
</ul>

<div>
    <img src={require('./number.jpg')} alt= "number" class="number" />
</div>
</div>
);
};
