module.exports = {
  testEnvironment: "jsdom",
  preset: './puppeteer.preset.js',
  testRegex: '(\\.|/)e2e\\.ts$',
  testEnvironment: "node",
  transform: {
    '^.+\\.ts$': 'ts-jest'
  }
}