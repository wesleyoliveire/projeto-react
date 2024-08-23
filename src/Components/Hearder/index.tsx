import Logo from "../../assets/img/Vector.svg";
import menu from "../../assets/img/fi-br-menu-burger.png";
import menu_2 from "../../assets/img/fi-bs-search.png";
import "../Hearder/style.css";

function Hearder() {
  return (
    <div id="menu">
      <header>
        <img className="minhalogo" src={Logo} alt="logo" />
        <ul className="menu">
          <img src={menu} alt="menu" />
          <li>MENU</li>
        </ul>
        <div className="menu_search">
          <img src={menu_2} alt="" />
          <input type="search" placeholder="Search" />
        </div>
        <button id="login">Login</button>
      </header>
    </div>
  );
}

export default Hearder;
