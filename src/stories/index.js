import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import Autocomplete from "../components/Autocomplete";
import Widget from "../components/Widget";

const style={
  display : 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const Presentation = () => (
  <div style={{style}}>
    <Autocomplete/>
  </div>
)

const Presentation2 = () => (
  <div style={{style}}>
    <Widget/>
  </div>
)

storiesOf('My Homework', module)
.add('Autocomplete', () => (
  <Presentation />
)).add('Widget', () => (
  <Presentation2 />
));
