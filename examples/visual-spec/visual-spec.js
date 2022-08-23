import config from '../config';
import { takeSnapshot } from 'testcafe-blink-diff';

const dataSet = require('../data/test-pages.data.json');
fixture(`Visual Tests`);

dataSet.forEach((data) => {
  if (data.skip === 'no') {
    test(`Take Snapshot of '${data.name}'`, async (t) => {
      await t.navigateTo(config.baseUrl + data.url);
      const width = data.width ? data.width : 1024;
      const height = data.height ? data.height : 2500;
      await t.resizeWindow(width, height);
      await takeSnapshot(t, data.name);
      await t.maximizeWindow();
    });
  }
});
