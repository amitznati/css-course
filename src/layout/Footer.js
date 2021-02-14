import logo192 from "../styles/images/logo192.png";

export default function Footer() {
  const links = ["Company", "Contact us", "Careers", "Privacy policy", "Terms"];
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={logo192} alt="logo" className="footer__logo" />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              {links.map((l) => (
                <li key={l} className="footer__list-item">
                  <a href="#" className="footer__link">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by{" "}
            <a href="#" className="footer__link">
              Jonas Schmedtmann
            </a>{" "}
            for his online course{" "}
            <a href="#" className="footer__link">
              Advanced CSS and Sass
            </a>
            . Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use
            this webpage for both personal and commercial use, but NOT to claim
            it as your own design. A credit to the original author, Jonas
            Schmedtmann, is of course highly appreciated!
          </p>
        </div>
      </div>
    </footer>
  );
}
