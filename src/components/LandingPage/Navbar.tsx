import React from "react"
import {Link} from "react-router-dom"
// Importing CSS STYLING
import "./Navbar.css"

// Importing Assests
import logo from "../../assests/logo.svg"

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="MuiContainer-root MuiContainer-maxWidthLg nav-items">
        <Link to="/">
          <span>
            <img src={logo} alt="tic-tac-toe logo" height="60" width="auto" />
          </span>
        </Link>
        <Link to="/tic-tac-toc">
          <button className="btn reset-btn-play">Play Now 🤾‍♂️</button>
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
