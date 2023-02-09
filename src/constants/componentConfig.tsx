import { Button } from '@atoms/Button';
import { Grid } from '@atoms/Grid';
import { GridDrop } from '@atoms/GridDrop';
import { Typography } from '@atoms/Typography';

const baseStyles = [
  { style: 'color', type: 'text' },
  { style: 'fontSize', type: 'text' },
  { style: 'fontWeight', type: 'text' },
  { style: 'textAlign', type: 'text' },
  { style: 'marginTop', type: 'text' },
  { style: 'marginBottom', type: 'text' },
  { style: 'marginLeft', type: 'text' },
  { style: 'marginRight', type: 'text' },
  { style: 'paddingTop', type: 'text' },
  { style: 'paddingBottom', type: 'text' },
  { style: 'paddingLeft', type: 'text' },
  { style: 'paddingRight', type: 'text' },
];

const componentConfig = {
  Button: {
    name: 'Button',
    type: 'Button',
    props: {
      children: 'Button',
    },
    Component: Button,
    styles: [
      ...baseStyles,
      { style: 'borderRadius', type: 'text' },
      { style: 'height', type: 'text' },
      { style: 'width', type: 'text' },
    ],
  },
  Typography: {
    name: 'Typography',
    type: 'Typography',
    props: {
      children: 'Example Typography',
    },
    styles: [
      ...baseStyles,
      { style: 'textTransform', type: 'text' },
      { style: 'height', type: 'text' },
      { style: 'width', type: 'text' },
    ],
    Component: Typography,
  },
  Grid: {
    name: 'Grid',
    type: 'Grid',
    styles: [
      ...baseStyles,
      { style: 'gridTemplateColumns', type: 'text' },
      { style: 'gridTemplateRows', type: 'text' },
      { style: 'gridGap', type: 'text' },
      { style: 'height', type: 'text' },
      { style: 'width', type: 'text' },
    ],
    Component: Grid,
  },
  GridDrop: {
    name: 'GridDrop',
    type: 'GridDrop',
    styles: [
      ...baseStyles,
      { style: 'gridTemplateColumns', type: 'text' },
      { style: 'gridTemplateRows', type: 'text' },
      { style: 'gridGap', type: 'text' },
      { style: 'height', type: 'text' },
      { style: 'width', type: 'text' },
    ],
    props: {
      children: 'Place a component here',
    },
    Component: GridDrop,
  },
};

export default componentConfig;
