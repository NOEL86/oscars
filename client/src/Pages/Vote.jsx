import React, { Component } from "react";
import NavTwo from "../Components/NavTwo";

class Vote extends Component {
  state = {};

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

        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Your Votes</h1>
            </div>
          </div>

          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s6">
                  <input id="first_name" type="text" class="validate" />
                  <label htmlFor="first_name">First Name</label>
                </div>
                <div className="input-field col s6">
                  <input id="last_name" type="text" class="validate" />
                  <label htmlFor="last_name">Last Name</label>
                </div>
              </div>
              <div class="input-field col s12">
                <h3>
                  <strong>Question 1</strong>
                </h3>
                <h4>You describe yourself as adventurous.</h4>
                <div className="row">
                  <div className="col s12">
                    <select>
                      <option value="">Options</option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </select>
                    <label>Materialize Select</label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Vote;
