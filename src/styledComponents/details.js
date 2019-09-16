import styled from 'styled-components';
import { FormCard } from './form';

export const DetailsCard = styled(FormCard)`
  padding: 30px;
  background-color: rgb(240, 240, 240);
  width: 80%;
`

export const DetailsContainer = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.24);
`

export const TopDetails = styled.div`
  margin-left: 15px;
  padding: 10px;
  background-color: ${props => props.theme.primary};
  label {
    color: white;
  }
`
export const BottomDetails = styled.div`
  padding: 10px;
  margin-left: 15px;
  background-color: ${props => props.theme.gray};
  label {
    color: ${props => props.theme.primary};
  }
`