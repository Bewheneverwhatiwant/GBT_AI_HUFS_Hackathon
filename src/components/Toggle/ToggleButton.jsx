import React, { useState } from 'react';
import styled from 'styled-components';
import CustomColumn from '../CommonComponents/CustomColumn';

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 0.4rem solid transparent;
  border-right: 0.4rem solid transparent;
  border-bottom: 0.7rem solid #D9D9D9;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(90deg)')};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
`;

const ToggleButton = ({ onClick, isOpen }) => {
  return (
    <CustomColumn $width='2rem' $height='1rem'>
      <Triangle onClick={onClick} isOpen={isOpen} />
    </CustomColumn>
  );
};

export default ToggleButton;
