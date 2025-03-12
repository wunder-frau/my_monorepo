import nx from '@nx/eslint-plugin';
import baseConfig from '../../eslint.config.js';

const eslintConfig = [
  ...baseConfig,
  ...nx.configs['flat/react'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {},
  },
];

export default eslintConfig;
