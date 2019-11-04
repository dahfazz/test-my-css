const puppeteer = require('puppeteer')

test('Header should look good be green', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/index.html');

    const headerBgColor = await page.evaluate(() => {
        const header = document.body.querySelector('.header');
        return window.getComputedStyle(header).backgroundColor;
      })
  
    await browser.close();
    expect(headerBgColor).toEqual('rgb(0, 255, 0)');
})