import { renderSync } from 'node-sass';

const SRC_PATH = 'scss/'

describe('Snapshot testing', () => {
  it('change only when expected', () => {

    const output = renderSync({
      file: SRC_PATH + 'index.scss',
      outputStyle: 'expanded',
    });

    expect(output.css.toString()).toMatchSnapshot('Index snap');
  });
});