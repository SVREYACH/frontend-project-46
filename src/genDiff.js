import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import parse from './parsers.js';

const getFileData = (filepath) => {
  const ext = path.extname(filepath).slice(1);
  const data = fs.readFileSync(filepath, 'utf-8');
  return parse(data, ext);  // ✅ Передаём ext
};

const genDiff = (filepath1, filepath2) => {
  const data1 = getFileData(filepath1);
  const data2 = getFileData(filepath2);

  const allKeys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));
  const result = allKeys.map((key) => {
    if (!_.has(data2, key)) {
      return `  - ${key}: ${data1[key]}`;
    }
    if (!_.has(data1, key)) {
      return `  + ${key}: ${data2[key]}`;
    }
    if (!_.isEqual(data1[key], data2[key])) {
      return [`  - ${key}: ${data1[key]}`, `  + ${key}: ${data2[key]}`].join('\n');
    }
    return `    ${key}: ${data1[key]}`;
  });

  return `{\n${result.join('\n')}\n}`;
};

export default genDiff;
