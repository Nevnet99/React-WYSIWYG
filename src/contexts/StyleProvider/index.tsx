import GlobalStyles from '@styles/globalStyles';
import theme from '@styles/theme';
import { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

const StyleProvider: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default StyleProvider;
