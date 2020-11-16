import React, { Component } from "react";
import "./about.css";
import fire from "../firebase";
import firebase, { auth, provider } from "../firebase.js";
import NavTwo from "../Components/NavTwo";
import NavAbout from "../Components/NavAbout";
class About extends Component {
  state = {
    info: false,
    loaded: false
  };

  componentDidMount = () => {
    let that = this;
    auth.onAuthStateChanged(function(user) {
      if (user) {
        let id = user.uid;
        let email = user.email;
        console.log(id);
        console.log(email);

        // let first = user.first
        // let last = user.last

        let userInfo = fire.database().ref("users/" + id);
        userInfo
          .child("vote")
          .once("value")
          .then(snap => {
            // console.log(snap.val());
            if (snap.val()) {
              that.setState({
                info: true,
                loaded: true
              });
            } else {
              return;
            }
          });
      } else {
       that.setState({
         info: false,
         loaded: false
       })
      }
    });
  };

  render() {
    return this.state.info ? (
      <div id="about">
        <NavTwo/>
        <div className="row">
          <div className="col m4 l3"></div>
          <div className="col s12 m7 l6">
            <div id="aboutCard" className="card">
              <div className="row center">
                <div className="col s12">
                  <img id="headshot" src="./headshotMe.png" alt="Ashley" />
                </div>
              </div>
              <div className="row center">
                <div id="paragraph" className="col s12">
                  <p>
                    I built this app using react, materialize, and firebase. The
                    purpose of this app is to utilize skills in react,
                    javascript and CRUD. Hope you like it!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ):(
      <div id="about">
      <NavAbout/>
      <div className="row">
        <div className="col m4 l3"></div>
        <div className="col s12 m7 l6">
          <div id="aboutCard" className="card">
            <div className="row center">
              <div className="col s12">
                <img id="headshot" src="./headshotMe.png" alt="Ashley" />
              </div>
            </div>
            <div className="row center">
              <div id="paragraph" className="col s12">
                <p>
                  I built this app using react, materialize, and firebase. The
                  purpose of this app is to utilize skills in react,
                  javascript and CRUD. Hope you like it!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
export default About;
