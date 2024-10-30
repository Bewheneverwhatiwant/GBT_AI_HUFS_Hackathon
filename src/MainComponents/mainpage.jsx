import React, { useState } from 'react';
import styled from 'styled-components';

import A_CoverComponent from './ServiceFlow/a_CoverComponent';
import B_ComplainListComponent from './ServiceFlow/B_ComplainListComponent';

const MainPage = () => {
	const [isComplaintsVisible, setIsComplaintsVisible] = useState(false);

	const handleStartClick = () => {
		setIsComplaintsVisible(true); // '시연시작' 버튼 클릭 시 호출
	};

	return (
		<>
			{isComplaintsVisible ? (
				<B_ComplainListComponent />
			) : (
				<A_CoverComponent onStartClick={handleStartClick} />
			)}
		</>
	);
};

export default MainPage;
