var express = require("express");
var router = express.Router();
var request = require("request");
var cheerio = require("cheerio");

const puppeteer = require("puppeteer");

router.get("/all", function(req, res) {
  // console.log("hit get all articles route");

  console.log(
    "\n******************************************\n" +
      "Grabbing every article headline, image, and link\n" +
      "from The Oscars website:" +
      "\n******************************************\n"
  );
  (async () => {
    let url = "https://oscar.go.com/news";
    let browser = await puppeteer.launch();
    let page = await browser.newPage();

    await page.goto(url, { waitUntil: "networkidle2" });

    let dataArr = await page.evaluate(() => {
      let headline = [
        ...document.querySelectorAll('div[class="at-inner"] > header > h3')
      ].map(el => el.innerText);
      let summary = [
        ...document.querySelectorAll('div[class="at-content"] > p')
      ].map(el => el.innerText);
      let date = [
        ...document.querySelectorAll('div[class="at-metadata"] > time')
      ].map(el => el.innerText);
      let img = [
        ...document.querySelectorAll('div[class="at-media"] > a > img')
      ].map(el => el.src);
      let articleUrl = [
        ...document.querySelectorAll('div[class="at-media"] > a')
      ].map(el => el.href);
      return {
        headline,
        summary,
        img,
        date,
        articleUrl
      };
    });

    console.log(dataArr);
    res.send(dataArr);
    await browser.close();
  })();
});

module.exports = router;
