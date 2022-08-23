# testcafedemo
Demo of Accessibility Testing and Visual Testing with testcafe-blink-diff

## Running accessiblity test that uses axe-core and axe-testcafe:
npm testcafe run examples/axe-spec/axe.spec.js

## Running lighthouse test which uses testcafe-lighthouse:
npx testcafe chrome:headless:cdpPort=9222 examples/lighthouse-spec/lighthouse.spec.js