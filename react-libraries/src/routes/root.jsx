import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
    <header>
      <div className="logo">
      </div>
    
      <nav className="navigation">
        <ul className="flex__row">
          <li><Link to={``}>Home</Link></li>
          <li><Link to={`about/`}>About</Link></li>
          <li><Link to={`tours/`}>Tours</Link></li>
          <li><Link to={`contact/`}>Contact</Link></li>
        </ul>
      </nav>
    
      <button type="button">Contact</button>
    </header>
    
    <main>
      <div id="page">
        <Outlet />
      </div>
    </main>
    </>
  )
}
