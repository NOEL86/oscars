import React, { Component } from "react";
import NavTwo from "../Components/NavTwo";

import "./news.css";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: [],
      summary: [],
      date: [],
      url: [],
      img: []
    };

    // this.scrapeArticles = this.scrapeArticles.bind(this);
  }
  componentWillMount() {
    //hit api go get articles
    let that = this;
    const axios = require("axios");
    axios
      .get("/all")
      .then(function(response) {
        // console.log(response.data.headline);
        // that.setState({
        //   headline: [response.data.headline],
        //   summary: [response.data.summary],
        //   date: [response.data.date],
        //   url: [response.data.articleUrl],
        //   img: [response.data.img]
        // });
        const arr = response.data;

        let newObject = _.zip(arr[0], arr[1], arr[2], arr[3], arr[4]).map(
          x => ({
            date: x[0],
            headline: x[1],
            summary: x[2],
            url: x[3],
            img: x[4]
          })
        );

        console.log("newObjectArrays: ", newObject);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }

  componentDidUpdate() {
    // var newArticles = this.state.date.map((date, index) => {
    //   return [
    //     {
    //       date: date,
    //       headline: this.state.headline[index],
    //       summary: this.state.summary[index],
    //       url: this.state.url[index],
    //       img: this.state.img[index]
    //     }
    //   ];
    // });
    // ** TRYING TO CREATE A NEW ARRAY OF OBJECTS TO MAKE THIS EASIER TO MAP TO A CARD ON THE FRONT END***
    // console.log("Updated Article Array:", newArticles);
  }

  render() {
    return (
      <div id="news">
        <NavTwo />
        <div className="row">
          <div className="col m2 l2" />
          <div className="col s12 m8 l7">
            <div id="newsCard" className="card">
              <h3 style={{ textAlign: "center" }}>Oscar Buzz</h3>
              <div className="row">
                <div className="col s12">
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default News;
