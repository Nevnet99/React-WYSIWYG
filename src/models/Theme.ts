import { Breakpoints } from './Breakpoints';

type RadiusOptions = 'sm' | 'complete';
type TypographyOptions = 'example';

export interface Theme {
  colors: {
    background: string;
    text: string;
  };
  radius: (type: RadiusOptions) => string | null;
  spacing: (value: number) => string | null;
  fontSize: (value: number) => string | null;
  minBp: (breakpoint: Breakpoints) => string | null;
  typography: (type: TypographyOptions) => string | null;
}
