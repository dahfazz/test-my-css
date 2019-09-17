const { teardown: teardownDevServer } = require('jest-dev-server');

module.exports = async function globalTeardown() {
  return Promise.all([
    require('jest-environment-puppeteer/lib/global').teardown(),
    teardownDevServer()
  ])
}