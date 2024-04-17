import { exists, readFileSync } from 'fs';


const fontFileContent = readFileSync('scss/_fonts.scss', 'utf-8');
const fontFileNames = fontFileContent.split(/\r?\n/)
  .filter(line => {
    return line.includes('src')
  })
  .map(line => line.replace('src: url("../fonts/', ''))
  .map(line => line.split('.ttf')[0])
  .map(line => line.trim())

describe('Font files testing', () => {
  it.each(fontFileNames)('%s file should exists', (fileName) => {
    exists(`fonts/${fileName}.ttf`, (_exists: boolean) => {
      expect(_exists).toBeTruthy()
    });
  });
});