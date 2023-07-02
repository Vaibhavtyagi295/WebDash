import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaCode, FaBars, FaTimes, FaSearch } from "react-icons/fa";
import axios from "axios";
import "./Navbar.css";

function NavBar({ isLoggedIn }) {
  const [click, setClick] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory(); // Initialize the history object

  const handleClick = () => setClick(!click);

  const handleLogout = async () => {
    try {
      // Make a request to the server to logout the user
      await axios.get("/logout");

      // Clear the user session or token from local storage
      localStorage.removeItem("userToken");

      // Redirect the user to the login page
      history.push("/login");
    } catch (error) {
      // Handle any error that occurs during the logout process
      console.error("Logout error:", error);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    // Process the search query (e.g., perform a search request)
    // You can add your own logic here

    setSearchQuery("");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
          VNEAR <FaCode />
        </NavLink>

        <form
          className={click ? "nav-search active" : "nav-search"}
          onSubmit={handleSearchSubmit}
        >
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <button type="submit" className="search-button">
            <FaSearch />
          </button>
        </form>

        <div className={`nav-menu ${click ? "active" : ""}`}>
          <ul className="nav-menu-items">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-link"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/login"
                    activeClassName="active"
                    className="nav-link"
                    onClick={handleClick}
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/signup"
                    activeClassName="active"
                    className="nav-link"
                    onClick={handleClick}
                  >
                    SignUp
                  </NavLink>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-link"
                  onClick={handleLogout}
                >
                  Logout
                </NavLink>
              </li>
            )}
            <li className="nav-item">
              <NavLink
                exact
                to="/adminpanel"
                activeClassName="active"
                className="nav-link"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="nav-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
