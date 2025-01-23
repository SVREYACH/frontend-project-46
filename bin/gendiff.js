#!/usr/bin/env node

import { Command } from 'commander';
import path from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/genDiff.js';

const program = new Command();

const getFileData = (filepath) => {
  const fullPath = path.resolve(process.cwd(), filepath);
  const fileContent = readFileSync(fullPath, 'utf-8');
  return JSON.parse(fileContent);
};

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format', 'default')
  .action((filepath1, filepath2) => {
    const data1 = getFileData(filepath1);
    const data2 = getFileData(filepath2);

    const diff = genDiff(data1, data2);
    console.log(diff);
  });

program.parse(process.argv);
