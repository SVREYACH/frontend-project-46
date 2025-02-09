import yaml from 'js-yaml';

const parse = (data, ext) => {
  if (ext === 'json') return JSON.parse(data);
  if (ext === 'yml' || ext === 'yaml') return yaml.load(data);
  throw new Error(`Unsupported format: ${ext}`);
};

export default parse;
