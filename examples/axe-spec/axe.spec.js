import config from '../config';
import { axeCheck, createReport } from 'axe-testcafe';

const dataSet = require('../data/test-pages.data.json');

fixture`AXE Tests`;

dataSet.forEach((data) => {
  if (data.skip === 'no') {
    test(`Component '${data.name}'`, async (t) => {
      await t.navigateTo(config.baseUrl + data.url);
      let { error, violations } = await axeCheck(t, null, config.axeRules);
      const isCritical = (violation) => {
        return violation.impact === 'critical';
      };
      violations = violations.filter(isCritical);
      await t.expect(violations.length === 0).ok(createReport(violations));
    });
  }
});
