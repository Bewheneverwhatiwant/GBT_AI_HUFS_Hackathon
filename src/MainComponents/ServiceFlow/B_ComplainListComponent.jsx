import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import CustomColumn from '../../components/CommonComponents/CustomColumn';
import CustomButton from '../../components/CommonComponents/CustomButton';
import CustomFont from '../../components/CommonComponents/CustomFont';
import CustomRow from '../../components/CommonComponents/CustomRow';
import ComplainBox from '../../components/ComplainBox';
import B_TopButtons from './B_TopButtons';

const B_ComplainListComponent = ({ similarCaseGroups }) => {

	useEffect(() => {
		if (similarCaseGroups && similarCaseGroups.length > 0) {
			console.log('similar_case_groups가 B_컴포넌트로 전달 성공:', similarCaseGroups);
		}
	}, [similarCaseGroups]);

	return (
		<CustomColumn $width="90%" $alignItems="center" $justifyContent="flex-start">
			<B_TopButtons />

			<CustomColumn $width="100%" $alignItems="center" $justifyContent="center" $gap="6rem">
				<ComplainBox />
				<ComplainBox />
			</CustomColumn>
		</CustomColumn>
	);
};

export default B_ComplainListComponent;
