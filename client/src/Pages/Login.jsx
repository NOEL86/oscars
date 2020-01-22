import React, { Component } from "react";
import NavTwo from "../Components/NavTwo";
import firebase, { auth, provider } from "../firebase.js";
// import GoogleButton from "react-google-button";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: {
        message: ""
      }
    };
  }
  login() {
    console.log("this.state", this.state);
    const { email, password } = this.state;
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userData => {
        console.log("login", userData);

        window.location.href = "/login";
        // alert('success');
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  //   googleLogIn() {
  //     auth.signInWithPopup(provider)
  //       .then((result) => {
  //         console.log(result);
  //         window.location.href = '/checkIn';

  //       });
  //   }

  componentDidMount() {}

  render() {
    return (
      <div id="signUp">
        <NavTwo />

        <div>{this.state.error.message}</div>
      </div>
    );
  }
}
export default Login;
