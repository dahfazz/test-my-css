module.exports = {
  globalSetup: './jest-setup',
  globalTeardown: './jest-teardown',
  setupFilesAfterEnv: ['./jest-framework-setup'],
  moduleFileExtensions: ['ts', 'js'],
  reporters: ['default', 'jest-screenshot/reporter'],
  preset: 'jest-puppeteer',
  testRegex: '(\\.|/)spec\\.js$'
}