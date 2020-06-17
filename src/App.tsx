import React from 'react';
import Routes from './Routes';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import GlobalStyle from './styles/global';
import usePersistedState from './utils/usePersistedState';
function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Routes toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
