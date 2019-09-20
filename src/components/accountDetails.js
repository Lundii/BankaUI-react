import React, { Component } from 'react';
import styledComponents from '../styledComponents';

const { DetailsCard, DetailsContainer, TopDetails, BottomDetails } = styledComponents;

const AccountDetails = (props) => {
  return (
    <DetailsCard>
      <DetailsContainer>
        <TopDetails>
          <label> Savings Account </label>
        </TopDetails>
        <BottomDetails>
          <label> 1234567890 </label>
        </BottomDetails>
      </DetailsContainer>
    </DetailsCard> 
  )
}

export default AccountDetails