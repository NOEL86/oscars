import React, { Component } from "react";
import NavTwo from "../Components/NavTwo";
import "./vote.css";

class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      selected: false
    };

    this.voteSubmit = this.voteSubmit.bind(this);
  }

  voteSubmit = e => {
    e.preventDefault();
    console.log("submit button clicked");
  };

  componentDidMount() {
    {
      /* $("#submit").on("click", function() {
      event.preventDefault();

      var newFriend = {
        name: $("#name")
          .val()
          .trim(),
        photo: $("#basic-url")
          .val()
          .trim(),
        scores: [
          $("#q0 :selected")
            .val()
            .trim(),
          $("#q1 :selected")
            .val()
            .trim(),
          $("#q2 :selected")
            .val()
            .trim(),
          $("#q3 :selected")
            .val()
            .trim(),
          $("#q4 :selected")
            .val()
            .trim(),
          $("#q5 :selected")
            .val()
            .trim(),
          $("#q6 :selected")
            .val()
            .trim(),
          $("#q7 :selected")
            .val()
            .trim(),
          $("#q8 :selected")
            .val()
            .trim(),
          $("#q9 :selected")
            .val()
            .trim()
        ]
      };
      var baseURL = window.location.origin;
      // ${currentURL}
      $.ajax({
        method: "POST",
        url: baseURL + "/api/friends",
        data: newFriend,
        success: function(friendData) {
          console.log("Click function is running");
          $("#matchName").text(friendData.name);
          $("#matchPhoto").attr("src", friendData.photo);
          $("#myModal").modal("toggle");

          $("#name").val("");
          $("#basic-url").val("");
          $("#q0").val("");
          $("#q1").val("");
          $("#q2").val("");
          $("#q3").val("");
          $("#q4").val("");
          $("#q5").val("");
          $("#q6").val("");
          $("#q7").val("");
          $("#q8").val("");
          $("#q9").val("");
        },
        dataType: "json"
      }); */
    }
  }

  render() {
    return (
      <div id="vote">
        <NavTwo />

        <div className="row">
          <div className="col s2 m3" />
          <div className="col s8 m8">
            <form onSubmit={this.voteSubmit} className="col s12">
              <div className="row">
                <h1 id="heading">Your Votes</h1>
              </div>
              <div className="row">
                <div className="input-field col s4">
                  <input id="first_name" type="text" className="validate" />
                  <label htmlFor="first_name">First Name</label>
                </div>
                <div className="input-field col s4">
                  <input id="last_name" type="text" className="validate" />
                  <label htmlFor="last_name">Last Name</label>
                </div>
              </div>
              <div className="input-field col s12">
                <h5>
                  <strong>Best Picture</strong>
                </h5>

                <div className="row">
                  <div className="col s4">
                    <select>
                      <option value="">Options</option>
                      <option value="1">The Irishman</option>
                      <option value="2">Jojo Rabbit</option>
                      <option value="3">Little Women</option>
                      <option value="4">1917</option>
                      <option value="5">Ford v Ferrari</option>
                      <option value="6"></option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-field col s12">
                <h5>
                  <strong>Best Actor</strong>
                </h5>

                <div className="row">
                  <div className="col s4">
                    <select>
                      <option value="">Options</option>
                      <option value="1">The Irishman</option>
                      <option value="2">Jojo Rabbit</option>
                      <option value="3">Little Women</option>
                      <option value="4">1917</option>
                      <option value="5">Ford v Ferrari</option>
                      <option value="6"></option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-field col s12">
                <h5>
                  <strong>Best Actress</strong>
                </h5>

                <div className="row">
                  <div className="col s4">
                    <select>
                      <option value="">Options</option>
                      <option value="1">The Irishman</option>
                      <option value="2">Jojo Rabbit</option>
                      <option value="3">Little Women</option>
                      <option value="4">1917</option>
                      <option value="5">Ford v Ferrari</option>
                      <option value="6"></option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-field col s12">
                <h5>
                  <strong>Best Supporting Actor</strong>
                </h5>

                <div className="row">
                  <div className="col s4">
                    <select>
                      <option value="">Options</option>
                      <option value="1">The Irishman</option>
                      <option value="2">Jojo Rabbit</option>
                      <option value="3">Little Women</option>
                      <option value="4">1917</option>
                      <option value="5">Ford v Ferrari</option>
                      <option value="6"></option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-field col s12">
                <h5>
                  <strong>Best Supporting Actress</strong>
                </h5>

                <div className="row">
                  <div className="col s4">
                    <select>
                      <option value="">Options</option>
                      <option value="1">The Irishman</option>
                      <option value="2">Jojo Rabbit</option>
                      <option value="3">Little Women</option>
                      <option value="4">1917</option>
                      <option value="5">Ford v Ferrari</option>
                      <option value="6"></option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-field col s12">
                <h5>
                  <strong>Cinematographer</strong>
                </h5>

                <div className="row">
                  <div className="col s4">
                    <select>
                      <option value="">Options</option>
                      <option value="1">The Irishman</option>
                      <option value="2">Jojo Rabbit</option>
                      <option value="3">Little Women</option>
                      <option value="4">1917</option>
                      <option value="5">Ford v Ferrari</option>
                      <option value="6"></option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-field col s12">
                <h5>
                  <strong>Best Director</strong>
                </h5>

                <div className="row">
                  <div className="col s4">
                    <select>
                      <option value="">Options</option>
                      <option value="1">The Irishman</option>
                      <option value="2">Jojo Rabbit</option>
                      <option value="3">Little Women</option>
                      <option value="4">1917</option>
                      <option value="5">Ford v Ferrari</option>
                      <option value="6"></option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-field col s12">
                <h5>
                  <strong>Best Short Film</strong>
                </h5>

                <div className="row">
                  <div className="col s4">
                    <select>
                      <option value="">Options</option>
                      <option value="1">The Irishman</option>
                      <option value="2">Jojo Rabbit</option>
                      <option value="3">Little Women</option>
                      <option value="4">1917</option>
                      <option value="5">Ford v Ferrari</option>
                      <option value="6"></option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-field col s12">
                <h5>
                  <strong>Best Song</strong>
                </h5>

                <div className="row">
                  <div className="col s4">
                    <select>
                      <option value="">Options</option>
                      <option value="1">The Irishman</option>
                      <option value="2">Jojo Rabbit</option>
                      <option value="3">Little Women</option>
                      <option value="4">1917</option>
                      <option value="5">Ford v Ferrari</option>
                      <option value="6"></option>
                    </select>
                  </div>
                </div>
              </div>
              <div id="alignRight" className="card-action">
                <button
                  id="btn"
                  className="btn waves-effect"
                  type="submit"
                  onSubmit={this.voteSubmit}
                  name="action"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Vote;
