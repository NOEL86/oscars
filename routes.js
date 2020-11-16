var express = require("express");
var router = express.Router();
// var request = require("request");
// var cheerio = require("cheerio");

const puppeteer = require("puppeteer");

router.get("/all", function(req, res) {
  // console.log("hit get all articles route");

  console.log(
    "\n******************************************\n" +
      "Grabbing every article headline and link\n" +
      "from The Oscars website:" +
      "\n******************************************\n"
  );
  async function scraperData(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
  
    const list = await page.evaluate(
      
      () => {
        let data = [];
        const list = document.querySelectorAll('.at-inner');
        for (const a of list) {
          data.push({
            'title': a.querySelector('.ng-binding.ng-scope').innerText.trim().replace(/ (\r\n|\n|\r) /gm, " "),
            'link': a.querySelector('a').href
          })
          
        }
        return data;
      }
    )
    console.log(list);
    res.send(list);
    
    debugger;
  
    await browser.close();
  }
  
  scraperData("https://oscar.go.com/");
})
module.exports = router;
