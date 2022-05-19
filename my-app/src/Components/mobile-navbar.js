import './mobile-navbar.css';

export const MobileNavbar = () => {
  return (<div class="mobile-navbar">
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
  <div class="one"></div>
  <div class="two"></div>
  <div class="three"></div>
</div>
);
};
