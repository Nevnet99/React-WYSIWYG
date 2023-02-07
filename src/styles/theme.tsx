import { Breakpoints } from '@models/Breakpoints';
import { Theme } from '@models/Theme';

const breakpointValues: {
  [key in Breakpoints]: number;
} = {
  mobile: 375,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
};

const setBreakpoint = (breakpoint: Breakpoints) => {
  if (typeof breakpoint === 'string' && breakpoint in breakpointValues)
    return breakpointValues[breakpoint];

  return breakpoint;
};

// convert pixels to rem
const pxToRem = (px: number) => `${px / 16}rem`;

const theme: Theme = {
  colors: {
    background: '#000',
    text: '#fff',
    error: '#f00',
    positive: '#0f0',
    positiveText: '#000',
  },
  radius: (type) => {
    if (!type) return null;

    const radiusValues = {
      sm: '4px',
      complete: '100%',
    };

    return radiusValues[type];
  },
  spacing: (value) => {
    if (!value) return null;

    return pxToRem(value);
  },
  fontSize: (value) => {
    if (!value) return null;

    return pxToRem(value);
  },
  typography: (type) => {
    if (!type) return null;

    const typographyValues = {
      example: `
        font-size: ${pxToRem(20)}
      `,
    };

    return typographyValues[type];
  },
  minBp: (breakpoint) => `@media (min-width: ${setBreakpoint(breakpoint)}px)`,
  font: {
    family: 'Roboto, sans-serif',
  },
};

// ! EXAMPLE USAGE
// ${({ theme }) => theme.minBp('tablet')} {
//   padding: 0 80px;
// }
// ${({ theme }) => theme.minBp('desktop')} {
//   padding: 0 150px;
// }

export default theme;
