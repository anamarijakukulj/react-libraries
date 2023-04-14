import { Link } from "react-router-dom";
import { pageLinks } from "../data";
import Facebook from "@mui/icons-material/FacebookOutlined";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";

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
          <ul className="nav-icons">
            <li><Link to={`www.facebook.com`} className="nav-icon"><Facebook /></Link></li>
            <li><Link to={`www.twitter.com`} className="nav-icon"><Twitter /></Link></li>
            <li><Link to={`www.instagram.com`} className="nav-icon"><Instagram /></Link></li>
          </ul>
        </nav>
      </div>
    </header>
    )
}

export default Header;
