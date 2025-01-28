import genDiff from '../src/genDiff.js';
import path from 'path';
import fs from 'fs';

test('genDiff compares flat JSON files', () => {
  const filepath1 = path.resolve('_fixtures_/file1.json');
  const filepath2 = path.resolve('_fixtures_/file2.json');
  const expected = fs.readFileSync(path.resolve('_fixtures_/expected_flat_diff.txt'), 'utf-8').trim();

  const result = genDiff(filepath1, filepath2);

  expect(result).toBe(expected);
});
