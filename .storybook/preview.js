import { addParameters } from '@storybook/react';
import crfTheme from './crfTheme';
import "../bootstrap-reboot.min.css"
import "../bootstrap.css"
import "../bootstrap-grid.css"
import "../main.css"

addParameters({
    options: {
      theme: crfTheme,
    },
  });