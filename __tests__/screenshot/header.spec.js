test('Header should look good in Light theme', async () => {
  await page.goto(`http://localhost:${process.env.PORT}/index.html`);
  expect(await page.screenshot()).toMatchImageSnapshot(); 
})

test('Header should look good in Dark theme', async () => {
  await page.goto(`http://localhost:${process.env.PORT}/index.html`);
  await page.evaluate(() => {
    document.body.classList.add('dark');
  })
  expect(await page.screenshot()).toMatchImageSnapshot(); 
})