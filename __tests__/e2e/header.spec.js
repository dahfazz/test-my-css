test('Header should look good on dark theme', async () => {
  await page.goto(`http://localhost:${process.env.PORT}/index.html`);

  await page.waitForSelector('.header')
  
  const darkHeaderBG = await page.evaluate(() => {
    const header = document.body.querySelector('.header');
    header.classList.add('dark');
    return window.getComputedStyle(header).backgroundColor;
  })

  expect(darkHeaderBG).toEqual('rgb(0, 0, 0)');
})
