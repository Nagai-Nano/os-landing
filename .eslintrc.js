module.exports = {
  extends: ['react-app'],
  rules: {},
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'react-hooks/exhaustive-deps': 'off'
      }
    }
  ]
}
