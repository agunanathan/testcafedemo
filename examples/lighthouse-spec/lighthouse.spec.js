import config from '../config';
import { testcafeAudit } from 'testcafe-lighthouse';

const dataSet = require('../data/test-pages.data.json');
fixture`Lighthouse Tests`;

dataSet.forEach((data) => {
  if (data.skip === 'no') {
    test(`Perform Lighthouse test on '${data.name}'`, async (t) => {
      await t.navigateTo(config.baseUrl + data.url);
      const currentURL = await t.eval(() => document.documentURI);
      await testcafeAudit({
        url: currentURL,
        thresholds: {
          accessibility: 80,
          /* The following threshold settings can be set and turned on if and when needed for the project
          performance: 50,
          'best-practices': 50,
          seo: 50,
          pwa: 50,
          */
        },
        cdpPort: 9222,
        reports: {
          formats: {
            html: true,
          },
          name: `lighthouse-output-${data.name}`,
          directory: `/Users/asokan/Projects/testcafedemo/examples/lighthouse-spec/lighthouse-output`,
        },
      });
    });
  }
});
