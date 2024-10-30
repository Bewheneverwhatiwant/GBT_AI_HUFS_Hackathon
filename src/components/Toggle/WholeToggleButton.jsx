import React, { useState } from 'react';
import styled from 'styled-components';
import ToggleButton from './ToggleButton';
import ToggleComplainBoxList from './ToggleComplainBoxList';

import CustomColumn from '../CommonComponents/CustomColumn';
import CustomRow from '../CommonComponents/CustomRow';
import CustomFont from '../CommonComponents/CustomFont';

const WholeToggleButton = ({ similarCaseGroups }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<CustomRow $width="100%" $alignItems="flex-start" $justifyContent="flex-start" $gap="0.5rem">
			<ToggleButton onClick={handleToggle} $isOpen={isOpen} />
			<CustomColumn $width="100%" $alignItems="flex-start" $justifyContent="center">
				<CustomFont $color="white" $font="1rem">
					이 민원과 비슷한 민원
				</CustomFont>
				{isOpen && <ToggleComplainBoxList similarCaseGroups={similarCaseGroups} />}
			</CustomColumn>
		</CustomRow>
	);
};

export default WholeToggleButton;
