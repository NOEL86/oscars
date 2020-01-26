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
  // console.log("hit get all articles route");

  console.log(
    "\n******************************************\n" +
      "Grabbing every article headline, image, and link\n" +
      "from The Oscars website:" +
      "\n******************************************\n"
  );
  request("https://oscar.go.com/news", function(err, response, html) {
    if (err) {
      console.log(err);
    }

    let $ = cheerio.load(html);
    let results = [];
    // console.log($("article.article-tile"));
    $("article.article-tile").each(function(i, element) {
      let img = $(element)
        .children()
        .attr("src");

      let url = $(element)
        .children()
        .attr("href");

      let title = $(element)
        .children()
        .find("div.at-inner.header.h3");

      console.log("==================");
      console.log(img);

      results.push({
        img: img,
        url: url,
        title: title
      });
    });

    console.log("==================");
    console.log(results);
    // res.send(response);
  });
});

module.exports = router;
