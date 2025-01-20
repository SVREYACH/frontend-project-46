#!/usr/bin/env node

import { Command } from 'commander';
import { readFileSync } from 'fs';
import path from 'path';

const program = new Command();

const parseFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const fileContent = readFileSync(absolutePath, 'utf-8');
  return JSON.parse(fileContent);
};

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format', 'default')
  .action((filepath1, filepath2) => {
    const data1 = parseFile(filepath1);
    const data2 = parseFile(filepath2);

    console.log(`Comparing files: ${filepath1} and ${filepath2}`);
    console.log(`Using format: ${program.opts().format}`);
    console.log('Parsed file 1:', data1);
    console.log('Parsed file 2:', data2);
  })
  .parse(process.argv);
