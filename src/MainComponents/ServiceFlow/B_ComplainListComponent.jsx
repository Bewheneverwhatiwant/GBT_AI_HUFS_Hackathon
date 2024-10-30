import React from 'react';
import styled from 'styled-components';

import CustomColumn from '../../components/CommonComponents/CustomColumn';
import CustomButton from '../../components/CommonComponents/CustomButton';
import CustomFont from '../../components/CommonComponents/CustomFont';
import CustomRow from '../../components/CommonComponents/CustomRow';
import StyledImg from '../../components/CommonComponents/StyledImg';
import ComplainBox from '../../components/ComplainBox';


const B_ComplainListComponent = () => {

	return (

		<CustomColumn $width='90%' $alignItems='center' $justifyContent='flex-start'>
			<CustomRow $width='100%' $alignItems='center' $justifyContent='flex-end' $gap='1rem'>
				<CustomButton $flexdirection='row' $width='9rem' $backgroundColor='#2B2B2B' $gap='0.5rem'>
					<StyledImg src={'icon_toggle.png'} $width='1rem' $height='0.5rem' />
					<CustomFont $color='white' $font='1rem'>전체조회</CustomFont>
				</CustomButton>
				<CustomButton $flexdirection='row' $width='9rem' $backgroundColor='#2B2B2B' $gap='0.5rem'>
					<StyledImg src={'icon_toggle.png'} $width='1rem' $height='0.5rem' />
					<CustomFont $color='white' $font='1rem'>최신순</CustomFont>
				</CustomButton>
			</CustomRow>

			<ComplainBox />
			<ComplainBox />
		</CustomColumn>

	);
};

export default B_ComplainListComponent;