import React, { Component } from "react";
import "./nav.css";
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // $(function() {
    //   $(".navigation__icon").click(function() {
    //     $(".navigation").toggleClass("navigation-open");
    //   });
    // });
  }

  handleClick = () => {
    console.log("click registered");
    const icon = document.querySelector(".navigation");
    icon.classList.toggle("navigation-open");
  };

  render() {
    return (
      <div className="header">
        <nav className="navigation">
          <section className="logo">
            <section className="navigation-icon" onClick={this.handleClick}>
              <span className="topbar"></span>
              <span className="middlebar"></span>
              <span className="bottombar"></span>
            </section>
            <ul className="navigation-ul">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="/news">News</a>
              </li>
              <li>
                <a href="">Vote</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
            </ul>
            <section className="navigation-social">
              <ul className="navigation-social-ul">
                <li>
                  <a className="social-icon" href=""></a>
                </li>
                <li>
                  <a className="social-icon" href=""></a>
                </li>
                <li>
                  <a className="social-icon" href=""></a>
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
