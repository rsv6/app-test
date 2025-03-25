import { Outlet } from "react-router";

const RootLayout = () => {
    return (
      <div>
        <header>
          {/*<nav>
            <Link to="/">Home</Link>
            <Link to="/about">Dashboard</Link>
          </nav>*/}
        </header>
        
        {/* Outlet renders child routes */}
        <Outlet />
        
        <footer>
          © 2024 My Application
        </footer>
      </div>
    )
}

export default RootLayout;