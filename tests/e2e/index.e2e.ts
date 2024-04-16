import { Browser, Page, launch } from 'puppeteer';

describe('Forms', () => {
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    browser = await launch({ headless: true });
    page = await browser.newPage();
    await page.goto('http://127.0.0.1:8080');
  });

  afterAll(() => {
    browser.close();
  });

  it('should have input and button with same heights"', async () => {
    const heights = await page.evaluate(() => {
      return {
        btn: document.querySelector('#tst-btn').getBoundingClientRect().height,
        input: document.querySelector('#tst-input').getBoundingClientRect().height,
      };
    });

    expect(heights.btn).toEqual(heights.input);
  });

  it('should apply color on button', async () => {
    const btnStyles = await page.evaluate(() => {
      const btn = document.querySelector('.btn-blue');
      const { backgroundColor, color } = window.getComputedStyle(btn);

      return { backgroundColor, color }
    });

    expect(btnStyles.backgroundColor).toEqual("rgb(0, 0, 255)");
    expect(btnStyles.color).toEqual("rgb(255, 255, 255)");
  })
});
