export default {
  // the default here is the e2e location but the tests will take
  // this variable if you want to point somewhere else
  baseUrl: 'https://rangle.io',
  axeRules: {
    runOnly: {
      values: ['wcag2a'],
    },
  },
};
