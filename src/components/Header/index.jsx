import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="logo Kasa" />
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          A propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;