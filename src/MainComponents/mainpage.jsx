import React, { useState } from 'react';
import styled from 'styled-components';

import A_CoverComponent from './ServiceFlow/a_CoverComponent';
import B_ComplainListComponent from './ServiceFlow/B_ComplainListComponent';

const MainPage = ({ onStartClick }) => {
	const [isComplaintsVisible, setIsComplaintsVisible] = useState(false);

	const handleStartClick = () => {
		setIsComplaintsVisible(true);
		onStartClick(); // App 컴포넌트의 상태 변경 함수 호출
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
