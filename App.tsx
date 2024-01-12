import React from 'react';
import {Text} from 'react-native';
import {Home} from './src/Pages/Home';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/styles/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
      <Home />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
