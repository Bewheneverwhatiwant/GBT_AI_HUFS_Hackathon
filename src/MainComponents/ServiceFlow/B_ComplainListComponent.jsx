import React, { useEffect } from 'react';
import CustomColumn from '../../components/CommonComponents/CustomColumn';
import B_TopButtons from './B_TopButtons';
import ComplainBox from '../../components/ComplainBox';

const B_ComplainListComponent = ({ similarCaseGroups }) => {
	useEffect(() => {
		if (similarCaseGroups && similarCaseGroups.length > 0) {
			console.log('similar_case_groups가 B_컴포넌트로 전달 성공:', similarCaseGroups);
		}
	}, [similarCaseGroups]);

	// 모든 case들을 하나의 배열로 평탄화(flatten)합니다.
	const cases = similarCaseGroups.flatMap((group) => group.cases);

	return (
		<CustomColumn $width="90%" $alignItems="center" $justifyContent="flex-start">
			<B_TopButtons />

			<CustomColumn $width="100%" $alignItems="center" $justifyContent="center" $gap="6rem">
				{cases.map((item, index) => (
					<ComplainBox
						key={index}
						title={item.case.title}
						recommendedAnswer={item.recommended_answer}
						answerDate={item.case.answer_date}
					/>
				))}
			</CustomColumn>
		</CustomColumn>
	);
};

export default B_ComplainListComponent;
