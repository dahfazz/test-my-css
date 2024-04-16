import { renderSync } from 'node-sass';
import { readdirSync } from 'fs';

const SRC_PATH = 'scss/'

const blacklist = [
  // '_functions.scss',
  // '_vars.scss',
];

const files = readdirSync('scss').filter(file => !blacklist.includes(file));

xdescribe('Snapshot testing', () => {
  it.each(files)('%s should match with snapshot', (file) => {
    const output = renderSync({
      file: SRC_PATH + file,
      outputStyle: 'expanded',
    });

    expect(output.css.toString()).toMatchSnapshot(file);
  });
});