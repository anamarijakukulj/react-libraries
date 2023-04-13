import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
    <Header />
    
    <main>
      <div id="page">
        <Outlet />
      </div>
    </main>
    </>
  )
}
