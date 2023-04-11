import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
    <header>
      <div className="logo">
      </div>
    
      <nav className="navigation">
        <ul className="flex__row">
          <li><a href="#">Home</a></li>
          <li><a href="#">Cards</a></li>
          <li><a href="#">Contact</a></li>
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
          <li><a href="#">Home</a></li>
          <li><a href="#">Cards</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    
      <nav className="navigation__footer">
        <ul>
          <li><a href="#">Characters</a></li>
          <li><a href="#">Locations</a></li>
          <li><a href="#">Episodes</a></li>
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