import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navTwo.css";
class NavTwo extends Component {
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
      <div>
        <nav id="navTwo">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">
              Oscars
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="#">Vote</Link>
              </li>
              <li>
                <Link to="#">About</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default NavTwo;
