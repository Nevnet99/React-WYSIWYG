import { Button } from '@atoms/Button';
import { Grid } from '@atoms/Grid';
import { Typography } from '@atoms/Typography';

const componentConfig = {
  Button: {
    name: 'Button',
    type: 'Button',
    props: {
      children: 'Button',
    },
    Component: Button,
  },
  Typography: {
    name: 'Typography',
    type: 'Typography',
    props: {
      children: 'Example Typography',
    },
    Component: Typography,
  },
  Grid: {
    name: 'Grid',
    type: 'Grid',
    Component: Grid,
  },
};

export default componentConfig;
