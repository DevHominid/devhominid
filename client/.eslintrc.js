module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb'],
  plugins: ['react', 'jsx-a11y', 'import'],
  env: {
    browser: true,
    es6: true,
    mocha: true
  },
  globals: {
    "expect": true,
    "shallow": true,
    "render": true,
    "mount": true
  },
  rules: {
    'jsx-a11y/href-no-hash': ['off'],
    'jsx-a11y/click-events-have-key-events': 'off',
    'import/no-extraneous-dependencies': ['error', {'devDependencies': true}],
    'react/forbid-prop-types': ['error', { forbid: ['any'] }],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react/jsx-max-props-per-line': [
      'error',
      { maximum: 1, when: 'multiline' }
    ],
    'implicit-arrow-linebreak': 'off',
    'comma-dangle': 'off',
    'max-len': [
      'warn',
      {
        code: 80,
        tabWidth: 2,
        comments: 80,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ]
  }
};