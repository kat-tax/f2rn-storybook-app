import 'client/src/styles';

import React from 'react';
import uniDefault, {themes as uniThemes} from 'ui/theme';
import {themes} from '@storybook/theming';
import type {Preview} from '@storybook/react';

const preview: Preview = {
  decorators: [
    (Story) => <Story/>,
  ],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Change the component theme',
      defaultValue: uniDefault,
      toolbar: {
        icon: 'paintbrush',
        dynamicTitle: true,
        items: Object.keys(uniThemes).map((k) => ({
          value: k,
          title: k.charAt(0).toUpperCase() + k.slice(1),
          icon: k === 'light' ? 'sun' : k === 'dark' ? 'moon' : '',
        })),
      },
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      theme: themes.dark,
    },
    actions: {
      argTypesRegex: '^on[A-Z].*',
    },
    controls: {
      hideNoControlsWarning: true,
    },
    options: {
      storySort: {
        method: '',
        order: [
          'References', [
            'Getting Started',
            'Typography',
            'Colors',
            'Icons',
          ],
          'Components',
        ],
        locales: '',
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#181818',
        },
        {
          name: 'light',
          value: '#f3f3f3',
        },
      ],
    },
  },
};

export default preview;