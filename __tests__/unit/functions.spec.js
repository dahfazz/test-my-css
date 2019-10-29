const sass = require('node-sass');

it('Functions are OK (unit test)', async () => {
  const result = await sass.renderSync({
    data: `
    @import 'src/scss/functions';
  .test {
    background-color: color-contrast(#fff);
  }`,
    outputStyle: 'compact'
  });
  expect(result.css.toString()).toEqual(`.test { background-color: #000; }
`);
});


it('Functions are OK  (unit test with fixture)', async () => {
  const result = sass.renderSync({
    data: `@import '__tests__/unit/functions.fixtures';`,
    outputStyle: 'compact'
  });
  expect(result.css.toString()).toEqual(`.test { background-color: #000; }
`);
});