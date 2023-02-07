import GlobalStyles from "@styles/globalStyles";
import theme from "@styles/theme";
import { ThemeProvider } from "styled-components";

function StyleProvider({ isStory, children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles isStory={isStory} />
      {children}
    </ThemeProvider>
  );
}

export default StyleProvider;
