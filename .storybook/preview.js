import { VueSvgIconPlugin } from '@yzfe/vue3-svgicon';

import { app } from '@storybook/vue3';

app.use(VueSvgIconPlugin, { tagName: 'vue-svgicon' });

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}