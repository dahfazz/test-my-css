test('Buttons should look good', async () => {
  await page.goto(`http://localhost:${process.env.PORT}/index.html`);
  expect(await page.screenshot()).toMatchImageSnapshot(); 
})