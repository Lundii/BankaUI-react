import React from 'react';
import styledComponents from '../../styledComponents';
import image from '../../assets/images/image7.jpg';

console.log(image)
const { HomeBackgroundImage, HomeText} = styledComponents;

const HomeBody = (props) => {
  return (
    <HomeBackgroundImage image={"image7.jpg"}>
      <HomeText>An online banking platform that serves your basic banking needs.</HomeText>
    </HomeBackgroundImage>
  )
}

export default HomeBody;