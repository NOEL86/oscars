import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase, { auth, provider } from "../firebase.js";
import M from "materialize-css";
// import options from "materialize-css";
import "./navTwo.css";
class NavTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    M.AutoInit();
  }

  handleClick = () => {
    const icon = document.querySelector(".navigation");
    icon.classList.toggle("navigation-open");
  };

  logout = e => {
    firebase
      .auth()
      .signOut()
      .then(
        function() {
          console.log("Signed Out");
          window.location.href = "/login#/login";
        },
        function(error) {
          console.error("Sign Out Error", error);
        }
      );
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
            <Link to="/" className="brand-logo">
              <img id="logo" src="../oscar.png" alt="logo" />
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
             
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/vote">Vote</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/" onClick={this.logout}>
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default NavTwo;
