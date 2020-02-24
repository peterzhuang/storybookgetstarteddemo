import React from 'react';
// import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CallToAction from '../components/form/cta-button';
import {withInfo} from '@storybook/addon-info';

// storiesOf("MyButton", module)
//     .add("Call to Action", () => (
//         <CallToAction label="Call To Action Button" onClick={action("button-click")}/>
//     ));

export default {
    component: CallToAction,
    title: 'Building Blocks | MyButton',
    decorators: [withInfo],
    parameters: {
      info: {
        inline: true,
        text: `
          description or documentation about my component
        `,
      },
    },
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
  };

  export const CallToActionButton = () => {
    return <CallToAction label="Call To Action Button" onClick={action("button-click")}/>;
  };



