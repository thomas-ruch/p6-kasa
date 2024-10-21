import { Link } from "react-router-dom";
import logo210 from "../../assets/logo210.png";

function Header() {
  return (
    <header>
      <img src={logo210} alt="logo Kasa" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </header>
  );
}

export default Header;
