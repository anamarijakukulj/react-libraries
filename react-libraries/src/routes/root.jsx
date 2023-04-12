import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
    <header>
      <div className="logo">
      </div>
    
      <nav className="navigation">
        <ul className="flex__row">
          <li><Link to={}>Home</a></li>
          <li><Link to={}>Cards</a></li>
          <li><Link to={`contact/`}>Contact</a></li>
        </ul>
      </nav>
    
      <button type="button">Contact</button>
    </header>
    
    <main>
      <div id="page">
        <Outlet />
      </div>
    </main>
    
    <footer>
      <nav className="navigation__footer">
        <ul>
          <li><Link to={}>Home</a></li>
          <li><Link to={}>Cards</a></li>
          <li><Link to={`contact/`}>Contact</a></li>
        </ul>
      </nav>
    
      <nav className="navigation__footer">
        <ul>
          <li><Link to={}>Characters</a></li>
          <li><Link to={}>Locations</a></li>
          <li><Link to={}>Episodes</a></li>
        </ul>
      </nav>
    
      <div>
        <div className="logo__footer">
        </div>
        <button type="button">Contact</button>
      </div>
    </footer>
    </>
  )
}
