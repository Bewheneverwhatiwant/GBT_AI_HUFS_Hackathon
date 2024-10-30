import React from 'react';
import styled from 'styled-components';

import CustomFont from '../components/CommonComponents/CustomFont';
import CustomColumn from '../components/CommonComponents/CustomColumn';
import CustomRow from '../components/CommonComponents/CustomRow';
import CustomDivider from '../components/CommonComponents/CustomDivider';
import CustomCenter from '../components/CommonComponents/CustomCenter';

const MainPage = () => {

	return (

		<CustomColumn $width='100%' $alignItems='center' $justifyContent='flex-start' $gap='2rem'>
			<CustomCenter>
				<CustomFont $color='white' $font='1rem'>여기에 내용</CustomFont>
			</CustomCenter>
		</CustomColumn>

	);
};

export default MainPage;