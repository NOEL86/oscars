import React, { Component, StrictMode } from "react";
import NavTwo from "../Components/NavTwo";
import NavAbout from "../Components/NavAbout";
import fire from "../firebase";
import firebase, { auth, provider } from "../firebase.js";
import ArticleCard from "../Components/articleCard";
import "./news.css";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles : [],
      headline: '',
      articleUrl: '',
      date: '',
      by: '',
      info: false,
      loaded: false
   
    };

    // this.scrapeArticles = this.scrapeArticles.bind(this);
  }
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
    return this.state.info ? (
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
                        date={article.date}
                        by={article.by}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ):(
      <div id="news">
        <NavAbout />
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
                        by={article.by}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default News;
