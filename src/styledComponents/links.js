import styled from 'styled-components';

export const StyledLink = styled.a`
  color: ${props => props.theme.default};
  margin: ${props => props.margin || "0 50px 0 0"};
  font-size: 20px;

  :link {
    text-decoration: none;
    color: white;
  }
  :visited {
    text-decoration: none;
  }
  :hover {
    text-decoration: none;
    border-bottom: 1px solid white;
    padding-bottom: 8px;
    cursor: pointer;
  }
  :active {
    text-decoration: none;
    border-bottom: 1px solid white;
    padding-bottom: 8px;
  }
`

export const HorizontalNavBar = styled.div`
  color: ${props => props.theme.default};
  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme.primary};
  padding: 15px;
`

export const VerticalNavBar = styled.div`
  height: 100vh;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
  background-color: rgb(240, 240, 240);
`

export const NavContainter = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
`

export const VerticalStyledLink = styled(StyledLink)`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.default};
  font-size: 15px;
  padding: 15px;
  width: 100%;
  margin: 0;
  margin-bottom: 8px;
  :hover {
    padding-bottom: 15px;
  }
  :active {
    padding-bottom: 15px;
  }
`