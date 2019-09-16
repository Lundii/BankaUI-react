import styled from 'styled-components';

export const FormCard = styled.div`
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
  width: 30%;
  margin: 0 auto;
  background-color: rgb(255, 255, 255);
  min-height: 400px;
  max-height: 550px;
  margin: 0% auto;
  overflow: auto;
  box-sizing: border-box;
`

export const FormContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  display: ${props => props.selected ? 'flex' : 'none'};
`

export const FormInput = styled.input`
  margin-bottom: 15px;
  padding: 8px;
  font-size: ${props => props.type === 'button' ? '20px' : '15px'};
  border: 1px solid black;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: ${props => props.type === 'button' ? 'rgb(18, 18, 107);' : 'rgb(255, 255, 255);'}
  color: ${props => props.type === 'button' ? 'white' : 'black'};
`