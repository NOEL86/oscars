import React, { Component } from "react";
import NavTwo from "../Components/NavTwo";

import "./news.css";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };

    this.scrapeArticles = this.scrapeArticles.bind(this);
  }
  componentDidMount() {
    //hit api go get articles
  }

  scrapeArticles = () => {
    const axios = require("axios");
    console.log("function scrape hit");

    axios
      .get("/all")
      .then(function(response) {
        console.log(response);

        if (response) {
          this.setState({
            articles: response.data
          });
        }
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };

  render() {
    return (
      <div id="news">
        <NavTwo />
        <div className="row">
          <div className="col s12 m4 l4" onClick={this.scrapeArticles}>
            <h3>Oscar Buzz</h3>
            <div className="articles">
              {/* {this.state.articles} */}
              {this.state.articles.map((article, i) => (
                <div>{article}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default News;
