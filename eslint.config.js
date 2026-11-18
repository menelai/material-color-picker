const angularConfig = require('@kovalenko/eslint/angular');

module.exports = angularConfig
  .map(config => {
    if (!config.ignores) {
      return config;
    }

    const ignores = config.ignores.filter(pattern => pattern !== 'projects/**/*');

    return ignores.length > 0 ? {...config, ignores} : undefined;
  })
  .map(config => {
    if (config?.rules?.['@angular-eslint/component-selector']) {
      return {
        ...config,
        rules: {
          ...config.rules,
          '@angular-eslint/component-selector': [
            'error',
            {prefix: 'ngc', style: 'kebab-case', type: 'element'},
          ],
        },
      };
    }

    return config;
  })
  .filter(Boolean);
