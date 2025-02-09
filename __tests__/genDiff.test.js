import path from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import genDiff from '../src/genDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '_fixtures_', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

test.each([
  ['file1.json', 'file2.json'],
  ['file1.yml', 'file2.yml'],
])('genDiff compares %s and %s', (file1, file2) => {
  const expected = readFile('expected_flat_diff.txt');
expect(genDiff(getFixturePath(file1), getFixturePath(file2))).toEqual(expected);
});
