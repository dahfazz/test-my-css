const sass = require('node-sass');

sass.render({
  file: './src/index.scss',
}, function (_err, result) {
  console.log(result.css.toString());
});
