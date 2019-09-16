import styled from 'styled-components';

export const HomeBackgroundImage = styled.div`
background-image: url('../src/assets/images/${props => props.image}');
background-size: cover;
background-repeat: no-repeat;
background-position: center;
height: 100vh;
`
