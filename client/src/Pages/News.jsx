import React, { Component } from "react";
import Nav from "../Components/Nav";

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
        <Nav />
        <div className="row">
          <div className="col s12 m8 l8">
            <div className="articles">
              {this.state.articles.map((article, i) => (
                <h4 key={i}>{article.headline}</h4>
                // <h5 key={i}>{article.link}</h5>
                // <p key={i}>{article.summary}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default News;
