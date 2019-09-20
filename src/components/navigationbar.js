import React from 'react';
import styledComponents from '../styledComponents';
import { BrowserRouter as Router, withRouter, Link } from "react-router-dom";

const { StyledLink, FlexItem , HorizontalNavBar} = styledComponents;

const NavBar =  (props) => {
  return (
    <HorizontalNavBar>
      <FlexItem width={"41.55%"}>
          <StyledLink to="/">Banka </StyledLink>
      </FlexItem>
      <FlexItem width={"50%"}>
        <StyledLink to="/">Home </StyledLink>
        <StyledLink to="/">About </StyledLink>
        <StyledLink to="/">Services </StyledLink>
        <StyledLink to="/">Contact </StyledLink>
      </FlexItem>
      <FlexItem width={"8.33%"}>
        <StyledLink to="/login">Login</StyledLink>
      </FlexItem>
    </HorizontalNavBar>
  )
}

NavBar.displayName = 'NavBar'

export default withRouter(NavBar);