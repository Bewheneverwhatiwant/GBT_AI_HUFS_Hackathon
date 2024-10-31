import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CustomColumn from './CommonComponents/CustomColumn';
import CustomBox from './CommonComponents/CustomBox';
import CustomFont from './CommonComponents/CustomFont';
import CustomRow from './CommonComponents/CustomRow';
import CustomButton from './CommonComponents/CustomButton';

const CustomTextarea = styled.textarea`
  width: 100%;
  height: 10rem;
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
	const [isEditing, setIsEditing] = useState(true); // 기본 편집 상태
	const [inputValue, setInputValue] = useState('');
	const [isLoading, setIsLoading] = useState(false); // 로딩 상태

	const [answer, setAnswer] = useState(''); // 등록된 답변 상태
	const [isCompleted, setIsCompleted] = useState(false); // 답변 등록 여부
	const [completedTime, setCompletedTime] = useState(''); // 답변 완료 시각
	const [aiGeneratedAnswer, setAIGeneratedAnswer] = useState(''); // AI 추천 답변 초기화용

	useEffect(() => {
		// 카테고리 변경 시 초기화
		setAnswer('');
		setInputValue('');
		setIsCompleted(false);
		setCompletedTime('');
	}, [recommendedAnswer]);

	const handleEditToggle = () => {
		setIsEditing(!isEditing);
		setInputValue(answer);
		if (isCompleted) {
			setIsCompleted(false);
		}
	};

	const handleRegister = () => {
		setAnswer(inputValue);
		setIsEditing(false);
		setIsCompleted(true);
		setCompletedTime(new Date().toLocaleString());
		alert('답변이 등록되었습니다!');
	};

	const fetchAIGeneratedAnswer = async () => {
		setIsLoading(true);
		try {
			const response = await axios.post(
				`${import.meta.env.VITE_SERVER}/request_recommended_answer`,
				{
					title: title,
					content: '',
					prompt_instruction: '단정하고 공손한 어조로 답변하라.민원의 근거가 될 수 있는 법, 조례, 조항 등을 인용하여, 유의미한 답변을 생성해내야 한다.',
				}
			);
			const aiContent = response.data.content;
			setInputValue(aiContent);
			setAIGeneratedAnswer(aiContent); // 초기화용 저장
		} catch (error) {
			console.error('AI 추천 답변 생성 실패:', error);
		}
		setIsLoading(false);
	};

	return (
		<CustomColumn $width="100%" $alignItems="center" $justifyContent="center">
			<CustomBox $backgroundColor="#2B2B2B" $width="100%">
				{isCompleted && (
					<CustomRow $width="100%" $alignItems="center" $justifyContent="space-between">
						<CustomFont $color="#91D567" $font="1rem" $fontWeight="bold">
							답변 완료
						</CustomFont>
						<CustomFont $color="#537042" $font="0.8rem">
							완료 시각: {completedTime}
						</CustomFont>
					</CustomRow>
				)}
				<CustomRow>
					<CustomFont $color="#FF904F" $font="1rem" $fontWeight="bold">
						민원 제목:
					</CustomFont>
					<CustomFont $color="white" $font="1rem" $fontWeight="bold">
						{title}
					</CustomFont>
				</CustomRow>
				<CustomRow $width="100%" $alignItems="center" $justifyContent="flex-end">
					<CustomFont $color="#464646" $font="1rem">
						{answerDate}
					</CustomFont>
				</CustomRow>

				{isEditing ? (
					<>
						{isLoading ? (
							<CustomFont $color="white" $font="1rem">
								로딩 중...
							</CustomFont>
						) : (
							<CustomTextarea
								placeholder="담당 공무원께서 답변 입력 바랍니다."
								value={inputValue}
								onChange={(e) => setInputValue(e.target.value)}
							/>
						)}
					</>
				) : (
					<CustomColumn>
						<CustomFont $color="#FF904F" $font="1rem" $fontWeight="bold">
							답변 입력:
						</CustomFont>
						<CustomFont $color="white" $font="1rem">
							{answer}
						</CustomFont>
					</CustomColumn>
				)}

				<CustomRow $width="100%" $alignItems="center" $justifyContent="flex-end" $gap="1rem">
					{isEditing ? (
						<>
							<CustomButton $backgroundColor="#464646" onClick={fetchAIGeneratedAnswer}>
								<CustomFont $color="white" $font="1rem">
									AI 추천 답변 생성하기
								</CustomFont>
							</CustomButton>
							<CustomButton $backgroundColor="#464646" onClick={handleRegister}>
								<CustomFont $color="white" $font="1rem">
									답변 등록하기
								</CustomFont>
							</CustomButton>
							{aiGeneratedAnswer && (
								<CustomButton
									$backgroundColor="#D88686"
									onClick={() => setInputValue(aiGeneratedAnswer)}
								>
									<CustomFont $color="white" $font="1rem">
										AI 추천 답변으로 초기화하기
									</CustomFont>
								</CustomButton>
							)}
						</>
					) : (
						<CustomButton $backgroundColor="#464646" onClick={handleEditToggle}>
							<CustomFont $color="white" $font="1rem">
								답변 수정하기
							</CustomFont>
						</CustomButton>
					)}
				</CustomRow>
			</CustomBox>
		</CustomColumn>
	);
};

export default ComplainBox;
