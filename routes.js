var express = require("express");
var router = express.Router();
var request = require("request");
var cheerio = require("cheerio");
var firebase = require("firebase");

var firebaseConfig = {
  apiKey: "AIzaSyAtg0NSuBaqJr6ln-I_uB12V01NzraTgr4",
  authDomain: "oscars-4eadc.firebaseapp.com",
  databaseURL: "https://oscars-4eadc.firebaseio.com",
  projectId: "oscars-4eadc",
  storageBucket: "oscars-4eadc.appspot.com",
  messagingSenderId: "721559200848",
  appId: "1:721559200848:web:d45bd89f88514c1421dd55",
  measurementId: "G-9JP6LL5F7H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

router.get("/all", function(req, res) {
  console.log("hit get all articles route");
  request("https://oscar.go.com/news", function(err, response, html) {
    if (err) {
      console.log(err);
    }

    let $ = cheerio.load(html);
    let results = [];
    let id = 0;

    $('<article class= "article-tile"> </article> ').each(function(i, element) {
      // let url = $(element)
      //   .children()
      //   .last("href");

      // let img = $(element)
      //   .children()
      //   .last("<p></p>");
      var title = $(element)
        .children()
        .find("p");

      console.log("==================");

      // console.log(element);
      results = {
        // img: img,
        // url: url
        title: title
      };
      console.log(results);
      // res.send(results);
      // database.ref().push(results);
    });
    console.log("==================");
    // console.log(response);
    // res.send(response);
  });
});

module.exports = router;
