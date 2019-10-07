test('Buttons should look good', async () => {
  await page.goto(`http://localhost:${process.env.PORT}/index.html`);
  const headerBgColor = await page.evaluate(() => {
    const header = document.querySelector('header');
    return window.getComputedStyle(header).backgroundColor;
  })
  expect(headerBgColor).toEqual('rgb(0, 0, 0)'); 
})