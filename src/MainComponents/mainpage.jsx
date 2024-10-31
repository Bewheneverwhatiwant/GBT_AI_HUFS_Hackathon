import React, { useState } from 'react';
import A_CoverComponent from './ServiceFlow/A_Component';
import B_ComplainListComponent from './ServiceFlow/B_ComplainListComponent';

const MainPage = ({ onStartClick, onCategoriesExtracted, selectedCategoryData }) => {
	const [isComplaintsVisible, setIsComplaintsVisible] = useState(false);

	const handleStartClick = () => {
		setIsComplaintsVisible(true);
		onStartClick();
	};

	return (
		<>
			{isComplaintsVisible ? (
				<B_ComplainListComponent categoryData={selectedCategoryData} />
			) : (
				<A_CoverComponent
					onStartClick={handleStartClick}
					onCategoriesExtracted={onCategoriesExtracted}
				/>
			)}
		</>
	);
};

export default MainPage;
