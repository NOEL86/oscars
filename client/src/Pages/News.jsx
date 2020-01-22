import React, { Component } from "react";
import NavTwo from "../Components/NavTwo";
import "./news.css";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }
  componentDidMount() {
    //hit api go get articles
  }

  render() {
    return (
      <div id="news">
        <NavTwo />
        <div className="row">
          <div className="col s12 m4 l4">
            <h3>Oscar Buzz</h3>
            <div className="articles">
              {this.state.articles.map((article, i) => (
                <h4 key={i}>{article.headline}</h4>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default News;
