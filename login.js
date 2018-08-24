const puppeteer = require('puppeteer');

(async () => {
    console.log('lok');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://192.168.0.11:4001');
    let err = await page.evaluate(`document.getElementsByClassName ('error-backend-down').length`);
    if err=0  console.log('Auhtung');

    console.error(err);

    //await browser.close();
})();