import Header from "../components/Header";

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
