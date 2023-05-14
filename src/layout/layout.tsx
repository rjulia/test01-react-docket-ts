import React from "react"
import { Outlet, Link } from "react-router-dom"

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav 
        className="navbar navbar-expand-lg navbar-light bg-light"
      >
        <ul className="flex flex-row ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product/2">Product</Link>
          </li>
          <li>
            <Link to="/typescripthooks">TypescriptHooks</Link>
          </li>
          <li>
            <Link to="/reducer">Reducer</Link>
          </li>
          <li>
            <Link to="/customhook">CustomHook</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  )
}

export default Layout
