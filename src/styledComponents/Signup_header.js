import styled from 'styled-components';

export const ToggleContainer = styled.div`
  display: flex;
  width: 100%;
`

export const ToggleDiv = styled.div`
  background-color: ${props => props.selected ? 'rgb(240, 240, 240);' : 'rgb(255, 255, 255);'};
  padding: 10px;
  width: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  p {
    font-size: 20px;
    text-align: center;
    margin: 1px;
  }
`