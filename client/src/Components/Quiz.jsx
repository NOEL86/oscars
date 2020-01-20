import React, { Component } from "react";
import Nav from "../Components/Nav";

class Main extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <form action="#">
        <h6>Best Picture</h6>
        <p>
          <label>
            <input name="group1" type="radio" checked />
            <span>The Irishman</span>
          </label>
        </p>
        <p>
          <label>
            <input name="group1" type="radio" />
            <span>Little Women</span>
          </label>
        </p>
        <p>
          <label>
            <input name="group1" type="radio" />
            <span>Ford V. Ferrari</span>
          </label>
        </p>
        <p>
          <label>
            <input name="group1" type="radio" />
            <span></span>
          </label>
        </p>
      </form>
    );
  }
}
export default Main;
