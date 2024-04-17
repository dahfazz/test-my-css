import { renderSync } from 'node-sass';

describe('CARD unit tests', () => {
  it('Should return Card CSS', () => {
    const result = renderSync({
      data: `
        @import 'scss/vars';
        @import 'scss/card';
      `,
      outputStyle: 'compact',
      sourceComments: false,
    });

    expect(result.css.toString()).toEqual(`.card { margin: 2rem 0; border: 1px solid blue; max-width: 380px; transition: all 300ms; }

.card .card-header { padding: 1rem; font-weight: bold; background-color: blue; color: white; }

.card .card-body { padding: 1rem; }

.card .card-footer { padding: 1rem; background-color: #ddd; }
`);
  });

  // it('Should return Card CSS', () => {
  //   const result = renderSync({
  //     data: `
  //       @import 'scss/vars';
  //       @import 'scss/card';
  //     `,
  //     outputStyle: 'compact',
  //     sourceComments: false,
  //   });

  //   expect(result.css.toString()).toMatchSnapshot('CARD');
  // });
});
