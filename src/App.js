import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import styledComponents from './styledComponents';
import Home from './views/HomePage';

const { theme, Wrapper } = styledComponents;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}> 
        <Wrapper>
          <Home />
        </Wrapper>
      </ThemeProvider>
    )
  }
}

export default App;