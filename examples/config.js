export default {
  // the default here is the e2e location but the tests will take
  // this variable if you want to point somewhere else
  baseUrl: 'http://www.anti-friction.ca',
  axeRules: {
    runOnly: {
      values: ['wcag2a'],
    },
  },
};
