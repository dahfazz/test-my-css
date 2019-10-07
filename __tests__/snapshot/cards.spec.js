var sass = require('node-sass');

it('Cards snapshot is OK', async () => {
  
  var result = sass.renderSync({
    data: `
    @import 'src/scss/variables';
    @import 'src/scss/card';
    `,
    outputStyle: 'nested'
  });
  expect(result.css.toString()).toMatchSnapshot();
});