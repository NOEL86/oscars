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
        const list = document.querySelectorAll('.AnchorLink.tile.tile--blogNews.tile--hero-inactive.tile--blogNews.tile--landscape');
        for (const a of list) {
          data.push({
            
            'date': a.querySelector('.fitt-tracker > div[class="tile--blogNews__content"] > div[class="tile--blogNews__content-date"]').innerText,
            'title': a.querySelector('.fitt-tracker > div[class="tile--blogNews__content"] > div[class="tile--blogNews__content-title"]').innerText,
            // 'img': a.querySelector('.Image aspect-ratio--parent_tile--blogNews__image > div[class="Image__Wrapper_aspect-ratio--child"] > picture').src,
            'link': a.href,
            "by" : a.querySelector('.fitt-tracker > div[class="tile--blogNews__content"] > div[class="tile--blogNews__content-author"]').innerText,
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
  
  scraperData("https://abc.com/shows/oscars/news/");
})
module.exports = router;
