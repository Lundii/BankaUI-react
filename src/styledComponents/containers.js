import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`

export const GridItem = styled.div`
  grid-column: ${props => props.column[0] || 0}/${props => props.column[1] || 0};
  grid-row: ${props => props.row[0] || 0}/${props => props.row[1] || 0};
  margin: auto;
  width: 100%;
`

export const FlexContainer = styled.div`
  display: flex;
  flex direction: ${props => props.column ? "column" : "row"};
  align-content: flex-end
`

export const FlexItem = styled.div`
  align-self: ${props => props.align || "center"};
  width: ${props => props.width || "100%"};
`
