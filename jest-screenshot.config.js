module.exports = {
  testEnvironment: "jsdom",
  preset: './puppeteer.preset.js',
  testRegex: '(\\.|/)screenshot\\.ts$',
  testEnvironment: "node",
  transform: {
    '^.+\\.ts$': 'ts-jest'
  }
}