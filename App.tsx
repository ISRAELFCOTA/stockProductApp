import React from 'react';
import {Text} from 'react-native';
import {Home} from './src/Pages/Home';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/styles/theme';
const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
