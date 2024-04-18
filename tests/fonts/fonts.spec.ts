import { existsSync, readFileSync } from 'fs';

const REGEXP = /\.\.\/fonts\/(\S+)\.ttf/

const fontFileLines = readFileSync('scss/_fonts.scss', 'utf-8').split(/\r?\n/);

const fontNames = fontFileLines.map(line => {
  const matchs = line.match(REGEXP);
  return matchs && matchs[1]
}).filter(Boolean);

describe('Font files testing', () => {
  it.each(fontNames)('%s file should exists', (fileName) => {
    const ex = existsSync(`fonts/${fileName}.ttf`);
    expect(ex).toBeTruthy()
  });
});