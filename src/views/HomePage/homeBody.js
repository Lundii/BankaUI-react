import React from 'react';
import styledComponents from '../../styledComponents';

const { HomeBackgroundImage, HomeText} = styledComponents;

const HomeBody = (props) => {
  return (
    <HomeBackgroundImage image={"image7.jpg"}>
      <HomeText>An online banking platform that serves your basic banking needs.</HomeText>
    </HomeBackgroundImage>
  )
}

export default HomeBody;