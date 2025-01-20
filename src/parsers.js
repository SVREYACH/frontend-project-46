import fs from 'fs';
import path from 'path';

/**
 * Reads and parses a JSON file.
 * @param {string} filepath - Path to the file.
 * @returns {Object} - Parsed data.
 */
const parseFile = (filepath) => {
  const absolutePath = path.resolve(filepath); // Преобразуем путь в абсолютный
  const fileContent = fs.readFileSync(absolutePath, 'utf-8'); // Считываем содержимое файла
  return JSON.parse(fileContent); // Парсим JSON
};

export default parseFile;
