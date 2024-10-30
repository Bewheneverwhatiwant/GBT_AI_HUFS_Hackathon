import React from 'react';
import ComplainBox from '../../components/ComplainBox';
import CustomColumn from '../CommonComponents/CustomColumn';

const ToggleComplainBoxList = ({ similarCaseGroups }) => {
	// 모든 similar case를 평탄화(flatten)하여 배열로 만듦
	const cases = similarCaseGroups.flatMap(group => group.cases);

	return (
		<CustomColumn $width="100%" $alignItems="center" $justifyContent="flex-start" $gap="1rem">
			{cases.map((item, index) => (
				<ComplainBox
					key={index}
					title={item.case.title}
					recommendedAnswer={item.recommended_answer}
					answerDate={item.case.answer_date}
				/>
			))}
		</CustomColumn>
	);
};

export default ToggleComplainBoxList;
