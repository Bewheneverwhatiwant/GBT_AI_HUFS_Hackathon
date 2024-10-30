import React, { useState } from 'react';
import styled from 'styled-components';

import CustomColumn from './CommonComponents/CustomColumn';
import CustomBox from './CommonComponents/CustomBox';
import CustomFont from './CommonComponents/CustomFont';
import CustomRow from './CommonComponents/CustomRow';
import CustomButton from './CommonComponents/CustomButton';

const CustomInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: 1px solid #464646;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
  color: white;
  outline: none;

  &:focus {
    border-color: #537042;
  }
`;

const ComplainBox = ({ title, recommendedAnswer, answerDate }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [answer, setAnswer] = useState(recommendedAnswer);
	const [inputValue, setInputValue] = useState(answer);
	const [isCompleted, setIsCompleted] = useState(false); // 답변 완료 여부
	const [completedTime, setCompletedTime] = useState(''); // 완료 시각 저장

	const handleEditToggle = () => {
		setIsEditing(!isEditing);
		setInputValue(answer);
		if (isCompleted) {
			setIsCompleted(false); // 수정 시 답변 완료 상태 초기화
		}
	};

	const handleRegister = () => {
		setAnswer(inputValue);
		setIsEditing(false);
		setIsCompleted(true); // 답변 완료 상태 설정
		setCompletedTime(new Date().toLocaleString()); // 답변 완료 시각 저장
		alert('답변이 등록되었습니다!');
	};

	return (
		<CustomColumn $width="100%" $alignItems="center" $justifyContent="center">
			<CustomBox $backgroundColor="#2B2B2B" $width="100%">
				<CustomColumn $width="100%" $alignItems="center" $justifyContent="center">
					{/* 답변 완료 텍스트 및 완료 시각 */}
					{isCompleted && (
						<CustomRow
							$width="100%"
							$alignItems="center"
							$justifyContent="space-between"
							$gap="0.5rem"
						>
							<CustomFont $color="#91D567" $font="1rem" $fontWeight="bold">
								답변 완료
							</CustomFont>
							<CustomFont $color="#537042" $font="0.8rem">
								완료 시각: {completedTime}
							</CustomFont>
						</CustomRow>
					)}

					<CustomFont $color="white" $font="1rem">
						{title}
					</CustomFont>
					<CustomRow $width="100%" $alignItems="center" $justifyContent="flex-end">
						<CustomFont $color="#464646" $font="1rem">
							{answerDate}
						</CustomFont>
					</CustomRow>

					{isEditing ? (
						<CustomInput
							type="text"
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
						/>
					) : (
						<CustomFont $color="white" $font="1rem">
							{answer}
						</CustomFont>
					)}

					<CustomRow $width="100%" $alignItems="center" $justifyContent="flex-end" $gap="1rem">
						{isEditing ? (
							<>
								<CustomButton
									$backgroundColor="#464646"
									onClick={() => setInputValue(recommendedAnswer)}
								>
									<CustomFont $color="white" $font="1rem">
										추천 답변으로 초기화
									</CustomFont>
								</CustomButton>
								<CustomButton $backgroundColor="#464646" onClick={handleRegister}>
									<CustomFont $color="white" $font="1rem">
										답변 등록
									</CustomFont>
								</CustomButton>
							</>
						) : (
							<CustomButton $backgroundColor="#464646" onClick={handleEditToggle}>
								<CustomFont $color="white" $font="1rem">
									답변 수정
								</CustomFont>
							</CustomButton>
						)}
					</CustomRow>
				</CustomColumn>
			</CustomBox>
		</CustomColumn>
	);
};

export default ComplainBox;
