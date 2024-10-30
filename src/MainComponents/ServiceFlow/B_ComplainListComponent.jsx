import React, { useEffect } from 'react';
import CustomColumn from '../../components/CommonComponents/CustomColumn';
import B_TopButtons from './B_TopButtons';
import ComplainBox from '../../components/ComplainBox';

const B_ComplainListComponent = ({ categoryData }) => {
	useEffect(() => {
		if (categoryData) {
			console.log('B 컴포넌트로 전달된 데이터:', categoryData);
		}
	}, [categoryData]);

	const { target_case, similar_case_groups } = categoryData || {};

	return (
		<CustomColumn $width="90%" $alignItems="center" $justifyContent="flex-start">
			<B_TopButtons />

			<CustomColumn $width="100%" $alignItems="center" $justifyContent="center" $gap="6rem">
				{target_case && (
					<ComplainBox
						title={target_case.title}
						recommendedAnswer={target_case.content}
						answerDate={target_case.answer_date}
					/>
				)}
			</CustomColumn>
		</CustomColumn>
	);
};

export default B_ComplainListComponent;
