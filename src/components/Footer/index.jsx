import logo from "../../assets/logo-white.png";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="logo Kasa" />
      <div className="footer-legal-notice">
        <span>© 2020 Kasa.</span>
        <span>All rights reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
