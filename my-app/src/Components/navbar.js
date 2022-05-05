import './navbar.css';

export const Navbar = () => {
  return (<div class="navbar">
  <div class="dropdown">
    <button class="dropbtn">Dropdown
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">All Plants</a>
      <a href="#">Cart</a>
    </div>
  </div>
</div>
);
};
