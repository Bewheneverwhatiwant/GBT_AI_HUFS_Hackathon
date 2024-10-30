import React, { useState } from 'react';
import styled from 'styled-components';

import CustomColumn from './CommonComponents/CustomColumn';
import CustomFont from './CommonComponents/CustomFont';
import CustomButton from './CommonComponents/CustomButton';
import CustomRow from './CommonComponents/CustomRow';

const SideBarContainer = styled.div`
    width: 15rem;
    position: fixed;
    background-color: #131517;
    padding: 0.5rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    justity-content: flex-start;
`;

const SideBar = () => {

	return (
		<SideBarContainer>
			<CustomColumn $width='100%' $height='100vh' $alignItems='center' $justifyContent='flex-start' $gap='1rem' >

				<CustomRow $width='100%' $alignItems='center' $justifyContent='flex-start'>
					<CustomFont $color='#AFAFAF' $fontWeight='bold' $font='1.5rem'>
						Category
					</CustomFont>
				</CustomRow>

				<CustomRow $width='100%' $alignItems='center' $justifyContent='flex-start'>
					<CustomButton $justifyContent='flex-start' $gap='1rem' $width='90%'
						$backgroundColor='transparent' $hoverColor='#282D31'>
						<CustomFont $color='white' $font='1rem'>카테고리1</CustomFont>
					</CustomButton>
				</CustomRow>

				<CustomRow $width='100%' $alignItems='center' $justifyContent='flex-start'>
					<CustomButton $justifyContent='flex-start' $gap='1rem' $width='90%'
						$backgroundColor='transparent' $hoverColor='#282D31'>
						<CustomFont $color='white' $font='1rem'>카테고리2</CustomFont>
					</CustomButton>
				</CustomRow>
			</CustomColumn>
		</SideBarContainer>
	);
};

export default SideBar;