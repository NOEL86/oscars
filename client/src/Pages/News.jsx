import React, { Component, StrictMode } from "react";
import NavTwo from "../Components/NavTwo";
import ArticleCard from "../Components/articleCard";
import "./news.css";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles : [],
      headline: '',
      articleUrl: ''
   
    };

    // this.scrapeArticles = this.scrapeArticles.bind(this);
  }
  componentWillMount() {
    //hit api go get articles

    let that = this;
    // const _ = require("underscore");
    const axios = require("axios");
    axios
      .get("/all")
      .then(function(articles) {
        console.log("All Data:", articles.data);
        // console.log(articles.data)
        const arr = articles.data;
        that.setState({
          articles: arr
        })

       
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
      
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
                  {this.state.articles.map(article => {
                    return (
                      <ArticleCard
                        id={article.id}
                        key={article.id}
                        headline={article.title}
                        articleUrl={article.link}
                      />
                    );
                  })}
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
