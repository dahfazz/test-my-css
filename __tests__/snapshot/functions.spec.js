var sass = require('node-sass');

it('Buttons are OK', async () => {
  
  var result = sass.renderSync({
    data: `
    @import 'src/functions';
    body {
      background-color: color-contrast(#ccc);
      color: color-contrast(#333);
    }`,
    outputStyle: 'nested'
  });
  expect(result.css.toString()).toMatchSnapshot();
});