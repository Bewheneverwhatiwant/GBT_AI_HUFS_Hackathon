import React, { useState } from 'react';
import A_CoverComponent from './ServiceFlow/a_CoverComponent';
import B_ComplainListComponent from './ServiceFlow/B_ComplainListComponent';

const MainPage = ({ onStartClick, onCategoriesExtracted, similarCaseGroups }) => {
	const [isComplaintsVisible, setIsComplaintsVisible] = useState(false);

	const handleStartClick = () => {
		setIsComplaintsVisible(true); // 민원 리스트 표시
		onStartClick(); // App 컴포넌트의 상태 변경 함수 호출
	};

	return (
		<>
			{isComplaintsVisible ? (
				<B_ComplainListComponent similarCaseGroups={similarCaseGroups} />
			) : (
				<A_CoverComponent
					onStartClick={handleStartClick}
					onCategoriesExtracted={onCategoriesExtracted} // 콜백 함수 전달
				/>
			)}
		</>
	);
};

export default MainPage;
