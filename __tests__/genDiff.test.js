import genDiff from '../src/genDiff.js';
import path from 'node:path';

test('test description', () => {
  const result = genDiff(path.resolve('__fixtures__/file1.json'), path.resolve('__fixtures__/file2.json'));
  expect(result).toBe('expected value');
});
