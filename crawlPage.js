const puppeteer = require('puppeteer');



const fs = require('fs');



(async () => {

  const browser = await puppeteer.launch({args: ['--no-sandbox']});

  const page = await browser.newPage();



  console.log('page.goto begin....')

  await page.goto('https://www.youtube.com/channel/UCAh9DbAZny_eoGFsYlH2JZw/videos');

  //await page.goto('https://www.baidu.com');

  console.log('page.goto done....')



  

 

  

var scroll = async function(){

  await page.evaluate(() => {

    window.scrollTo(0, 9999999999999)

  });

}



var sleep = async function () {

  return new Promise(function(resolve, reject) {

    // scroll()

    // resolve()

      let max = 4

      let i = 0;



      let t = setInterval(()=>{

        if( i >= max) {

            clearInterval(t)

            resolve()

        }else{ 

          scroll()

        }

        i++

        console.log('again..')

      }, 2000)



  })

};



  // 在这里使用起来就像同步代码那样直观

  console.log('start');

  await sleep();

  console.log('end');



  let bodyHTML = await page.evaluate(() => document.body.innerHTML);

  fs.writeFileSync('./body_youtube_4.txt', bodyHTML)









browser.close();



})();
