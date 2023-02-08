import { Breakpoints } from './Breakpoints';

type RadiusOptions = 'sm' | 'complete';
type TypographyOptions = 'example';

export interface Theme {
  colors: {
    background: string;
    secondaryBackground: string;
    text: string;
    error: string;
    positive: string;
    positiveText: string;
    outline: string;
  };
  radius: (type: RadiusOptions) => string | null;
  spacing: (value: number) => string | null;
  fontSize: (value: number) => string | null;
  minBp: (breakpoint: Breakpoints) => string | null;
  typography: (type: TypographyOptions) => string | null;
  font: {
    family: string;
  };
}
