import { renderSync, Result, } from 'node-sass';

describe('Function unit tests', () => {

  it('Should return dark color against light', () => {
    const result = renderSync({
      data: `@import 'scss/functions';
      .test { color: color-contrast(#eee); }`,
      outputStyle: 'compact',
    });

    expect(cleanCSS(result)).toEqual(`.test { color: #000; }`);
  });

  it('Should return light color against dark', () => {
    const result = renderSync({
      data: `
      @import 'scss/functions';
      
      .test { color: color-contrast(#333); }
      `,
      outputStyle: 'compact',
    });

    expect(cleanCSS(result)).toEqual(`.test { color: #fff; }`)
  });

  // it('Should return dark color against light', () => {
  //   const result = renderSync({
  //     data: `@import 'tests/unit/functions.fixtures';`,
  //     outputStyle: 'compact',
  //   });

  //   expect(cleanCSS(result)).toEqual(`.test { color: #000; }`);
  // });
});

const cleanCSS = (res: Result) => res.css.toString()
  .replace(/(\r\n|\n|\r)/gm, "")
  .replace('/* stylelint-disable scss/no-global-function-names */', "")

