import { Result } from 'node-sass';

const sass = import('node-sass');

describe('Function unit tests', () => {
  it('Should return dark color against light', async () => {
    const result = (await sass).renderSync({
      data: `@import 'scss/functions';
      .test { color: color-contrast(#eee); }`,
      outputStyle: 'compact'
    });

    expect(cleanCSS(result)).toEqual(`.test { color: #000; }`);
  });

  it('Should return light color against dark', async () => {
    const result = (await sass).renderSync({
      data: `
      @import 'scss/functions';
      
      .test { color: color-contrast(#333); }
      `,
      outputStyle: 'compact'
    });

    expect(cleanCSS(result)).toEqual(`.test { color: #fff; }`)
  });

  it('Should return dark color against light', async () => {
    const result = (await sass).renderSync({
      data: `@import 'tests/unit/functions.fixtures';`,
      outputStyle: 'compact'
    });

    expect(cleanCSS(result)).toEqual(`.test { color: #000; }`);
  });
});

const cleanCSS = (res: Result) => res.css.toString().replace(/(\r\n|\n|\r)/gm, "")

