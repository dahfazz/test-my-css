var sass = require('node-sass');

it('Functions snapshot is OK', async () => {
  
  var result = sass.renderSync({
    data: `
    @import 'src/scss/functions';
    body {
      background-color: color-contrast(#ccc);
      color: color-contrast(#333);
    }`,
    outputStyle: 'nested'
  });
  expect(result.css.toString()).toMatchSnapshot();
});