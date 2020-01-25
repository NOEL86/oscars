import React, { Component } from "react";
import NavTwo from "../Components/NavTwo";
import firebase, { auth, provider } from "../firebase";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      last_name: "",
      first_name: "",
      error: {
        message: ""
      }
    };
  }
  signUp() {
    console.log("this.state", this.state);
    const { email, password } = this.state;
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userData => {
        console.log("signUp", userData);
        alert("Success");
        window.location.href = "/";
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  componentDidMount() {}

  render() {
    return (
      <div id="signUp">
        <NavTwo />
        <div className="row">
          <div className="col s3" />
          <form className="col s6">
            <div className="row">
              <div className="input-field col s6">
                <input
                  //   placeholder="Placeholder"
                  id="first_name"
                  type="text"
                  className="validate"
                  onChange={event =>
                    this.setState({ first_name: event.target.value })
                  }
                />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="last_name"
                  type="text"
                  className="validate"
                  onChange={event =>
                    this.setState({ last_name: event.target.value })
                  }
                />
                <label htmlFor="last_name">Last Name</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  className="form-control"
                  type="password"
                  //   placeholder="password"
                  onChange={event =>
                    this.setState({ password: event.target.value })
                  }
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  className="form-control"
                  type="email"
                  //   placeholder="email"
                  onChange={event =>
                    this.setState({ email: event.target.value })
                  }
                />
              </div>
            </div>
            <button
              className="btn waves-effect waves-light"
              type="button"
              onClick={() => this.signUp()}
              name="action"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
        <div>{this.state.error.message}</div>
      </div>
    );
  }
}
export default SignUp;
