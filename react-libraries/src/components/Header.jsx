import { Link } from "react-router-dom";
import { pageLinks } from "../data";

const Header = () => {
    return (
        <header className="navbar">
      <div className="nav-center">
        <div className="nav-logo">
        </div>
    
        <nav>
          <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <Link to={link.href} className="nav-link">
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
        </nav>
      
        <nav>
          {/* <ul className="nav-icons">
          {socialLinks.map((link) => {
            const { id, href, icon } = link;
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  className="nav-icon"
                  rel="noreferrer"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
          </ul> */}
          <ul className="nav-icons">
            <li><Link to={``} className="nav-icon"><i className="">F</i></Link></li>
            <li><Link to={``} className="nav-icon"><i className="">Tw</i></Link></li>
            <li><Link to={``} className="nav-icon"><i className="">Ig</i></Link></li>
          </ul>
        </nav>
      </div>
    </header>
    )
}

export default Header;
