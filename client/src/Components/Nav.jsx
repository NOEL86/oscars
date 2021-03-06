import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./nav.css";
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {}

  handleClick = () => {
    const icon = document.querySelector(".navigation");
    icon.classList.toggle("navigation-open");
  };

  render() {
    return (
      <div className="header">
        <nav className="navigation" onClick={this.handleClick}>
          <section className="logo">
            <section className="navigation-icon">
              <span className="topbar"></span>
              <span className="middlebar"></span>
              <span className="bottombar"></span>
            </section>
            <ul className="navigation-ul">
              {/* <li>
                <Link to="/signup" id="a">
                  Sign Up
                </Link>
              </li> */}
              <li>
                <Link to="/login" id="a">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/news" id="a">
                  News
                </Link>
              </li>
              <li>
                <Link to="/vote" id="a">
                  Vote
                </Link>
              </li>
              <li>
                <Link to="/about" id="a">
                  About
                </Link>
              </li>
            </ul>
            <section className="navigation-social">
              <ul className="navigation-social-ul">
                <li>
                  <a className="social-icon" href="#"></a>
                </li>
                <li>
                  <a className="social-icon" href="#"></a>
                </li>
                <li>
                  <a className="social-icon" href="#"></a>
                </li>
              </ul>
            </section>
          </section>
        </nav>
      </div>
    );
  }
}
export default Nav;
