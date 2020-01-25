import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
// import options from "materialize-css";
import "./navTwo.css";
class NavTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    M.AutoInit();
  }

  handleClick = () => {
    const icon = document.querySelector(".navigation");
    icon.classList.toggle("navigation-open");
  };

  render() {
    return (
      <div>
        <nav id="navTwo">
          <a
            href="#"
            data-target="mobile-demo"
            className="sidenav-trigger show-on-med-and-down"
          >
            <i className="material-icons">menu</i>
          </a>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">
              <img id="logo" src="../oscar.png" alt="logo" />
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/vote">Vote</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default NavTwo;
