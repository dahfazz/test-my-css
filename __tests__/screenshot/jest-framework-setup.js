// add `toMatchImageSnapshot` to Jest expect
// see https://github.com/Prior99/jest-screenshot#installing-the-expect-extension
const { setupJestScreenshot } = require('jest-screenshot');
setupJestScreenshot();

// Add Puppeteer like API to Jest expect
// see https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer#api
require('expect-puppeteer');

// Extends test default timeout
// see https://jestjs.io/docs/en/jest-object#jestsettimeouttimeout
jest.setTimeout(30 * 1000);