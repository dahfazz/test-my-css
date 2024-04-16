import { Browser, launch } from 'puppeteer';
import { toMatchImageSnapshot } from 'jest-image-snapshot';

expect.extend({ toMatchImageSnapshot });

describe('jest-image-snapshot usage with an image received from puppeteer', () => {
  let browser: Browser;

  beforeAll(async () => {
    browser = await launch();
  });

  it('works', async () => {
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:8080');
    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  afterAll(async () => {
    await browser.close();
  });
});