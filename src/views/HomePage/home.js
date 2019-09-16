import React, { Component } from 'react';
import NavBar from '../../components/navigationbar';
import HomeBody from './homeBody';
import styledComponents from '../../styledComponents';

const { GridContainer, GridItem} = styledComponents;

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <GridContainer>
        <GridItem column={[1]} row={[1,2]}>
          <NavBar />
        </GridItem>
        <GridItem column={[1]} row={[2,3]}>
          <HomeBody />
        </GridItem>
      </GridContainer>
    )
  }
}

export default HomePage;