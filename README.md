# testcafedemo
Demo of Accessibility Testing and Visual Testing with testcafe-blink-diff

Repo Installation Steps:
  1. clone repo
  2. Run "npm install"

## Running accessiblity test that uses axe-core and axe-testcafe:
  npx testcafe chrome examples/axe-spec/axe.spec.js --skip-js-errors

## Running lighthouse test which uses testcafe-lighthouse:
  npx testcafe chrome:headless:cdpPort=9222 examples/lighthouse-spec/lighthouse.spec.js --skip-js-errors

## Running Visual Tests using Testcafe blink diff:

### Create baseline images
  npx testcafe chrome:headless examples/visual-spec/visual-spec.js -s examples/visual-spec/screenshots --take-snapshot base --skip-js-errors

### Create actual images
  npx testcafe chrome:headless examples/visual-spec/visual-spec.js -s examples/visual-spec/screenshots --take-snapshot actual --skip-js-errors

### Compare base with actual:
  npx testcafe-blink-diff examples/visual-spec/screenshots --compare base:actual --open --threshold 0.03
