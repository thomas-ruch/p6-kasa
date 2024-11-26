import logo from "../../assets/logo-white.png";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="logo Kasa" />
      <div className="footer-legal-notice">
        <span>
          © 2020 Kasa. All <br className="conditionnal-break" />
          rights reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;
