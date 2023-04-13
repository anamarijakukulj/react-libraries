import { Link } from "react-route-dom";
import { pageLinks } from "../data";
import { socialLinks } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          return (
            <li id={link.id}>
              <Link to={link.href} className="footer-link">
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>

//       <ul className="footer-icons">
//         {socialLinks.map((link) => {
//           return (
//             <li id={link.id}>
//               <a
//                 href={link.href}
//                 target="_blank"
//                 className="footer-icon"
//                 rel="noreferrer"
//               >
//                 <i className={link.icon}></i>
//               </a>
//             </li>
//           );
//         })}
//       </ul>

      <ul className="nav-icons">
            <li><Link to={``} className="nav-icon"><i className="">F</i></Link></li>
            <li><Link to={``} className="nav-icon"><i className="">Tw</i></Link></li>
            <li><Link to={``} className="nav-icon"><i className="">Ig</i></Link></li>
       </ul>

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
