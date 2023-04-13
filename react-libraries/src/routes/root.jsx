import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
    <header className="navbar">
      <div className="nav__center">
        <div className="nav__logo">
        </div>
    
        <nav>
          <ul className="nav__links">
            <li><Link to={`/`} className="nav__link">Home</Link></li>
            <li><Link to={`about/`} className="nav__link">About</Link></li>
            <li><Link to={`tours/`} className="nav__link">Tours</Link></li>
            <li><Link to={`contact/`} className="nav__link">Contact</Link></li>
          </ul>
        </nav>
      
        <nav>
          <ul className="nav__icons">
            <li><Link to={``} className="nav__icon"><i className="">F</i></Link></li>
            <li><Link to={``} className="nav__icon"><i className="">Tw</i></Link></li>
            <li><Link to={``} className="nav__icon"><i className="">Ig</i></Link></li>
          </ul>
        </nav>
      </div>
    </header>
    
    <main>
      <div id="page">
        <Outlet />
      </div>
    </main>
    </>
  )
}
