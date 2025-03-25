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
          <a href="https://github.com/rsv6" target="_blank" rel="noopener noreferrer">@rsv6</a> | 2025.
        </footer>
      </div>
    )
}

export default RootLayout;