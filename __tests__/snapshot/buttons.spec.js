var sass = require('node-sass');

it('Buttons are OK', async () => {
  
  var result = sass.renderSync({
    file: 'src/_buttons.scss',
    outputStyle: 'nested'
  });
  expect(result.css.toString()).toMatchSnapshot();
});