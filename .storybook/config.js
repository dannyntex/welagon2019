import { configure } from '@storybook/react';
import '@storybook/addon-actions/register';
const req = require.context('../src', true, /__stories__\/.+\.js$/);
function loadStories() {

      req.keys().forEach(req);
}

configure(loadStories, module);
