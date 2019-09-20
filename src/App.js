import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import styledComponents from './styledComponents';
import Home from './views/HomePage';
import Login from './components/Forms/login';
import NavigationBar from './components/navigationbar';

const { theme, Wrapper } = styledComponents;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}> 
        <Wrapper>
          {/* <NavigationBar /> */}
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/login" component={Login} />
            </Switch>
          </Router>
        </Wrapper>
      </ThemeProvider>
    )
  }
}

export default App;