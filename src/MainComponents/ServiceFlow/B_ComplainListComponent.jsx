import React, { useEffect } from 'react';
import CustomColumn from '../../components/CommonComponents/CustomColumn';
import WholeToggleButton from '../../components/Toggle/WholeToggleButton';
import ComplainBox from '../../components/ComplainBox';
import B_TopButtons from './B_TopButtons';

const B_ComplainListComponent = ({ categoryData }) => {
	useEffect(() => {
		if (categoryData) {
			console.log('B 컴포넌트로 전달된 데이터:', categoryData);
		}
	}, [categoryData]);

	const { target_case, similar_case_groups } = categoryData || {};

	return (
		<CustomColumn $width="90%" $alignItems="center" $justifyContent="flex-start" $gap="2rem">
			<B_TopButtons />

			{target_case && (
				<ComplainBox
					key={target_case.case_id} // key를 설정해 컴포넌트 강제 재생성
					title={target_case.title}
					recommendedAnswer={target_case.recommended_answer}
					answerDate={target_case.answer_date}
				/>
			)}

			{similar_case_groups && similar_case_groups.length > 0 && (
				<WholeToggleButton similarCaseGroups={similar_case_groups} />
			)}
		</CustomColumn>
	);
};

export default B_ComplainListComponent;
