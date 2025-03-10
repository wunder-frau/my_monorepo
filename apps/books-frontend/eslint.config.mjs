import nx from '@nx/eslint-plugin'; // Use ES module imports
import baseConfig from '../../eslint.config.js'; // Use ES module imports

export default [
  ...baseConfig,
  ...nx.configs['flat/react'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {},
  },
];
