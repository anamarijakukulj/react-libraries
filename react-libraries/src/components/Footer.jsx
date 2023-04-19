import { Link } from "react-router-dom";
import { pageLinks } from "../data";
import Facebook from "@mui/icons-material/FacebookOutlined";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";
// import { socialLinks } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          return (
            <li key={link.id}>
              <Link to={link.href} className="footer-link">
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>

      <ul className="footer-icons">
            <li><Link to={`www.facebook.com`} className="footer-icon"><Facebook /></Link></li>
            <li><Link to={`www.twitter.com`} className="footer-icon"><Twitter /></Link></li>
            <li><Link to={`www.instagram.com`} className="footer-icon"><Instagram /></Link></li>
       </ul>

      <p className="copyright">
        copyright &copy; Backroads travel tours company
      </p>
    </footer>
  );
};

export default Footer;
