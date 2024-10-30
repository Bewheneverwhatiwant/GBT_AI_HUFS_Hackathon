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

	const handleEditToggle = () => {
		setIsEditing(!isEditing);
		setInputValue(answer);
	};

	const handleRegister = () => {
		setAnswer(inputValue);
		setIsEditing(false);
		alert('답변이 등록되었습니다!');
	};

	return (
		<CustomColumn $width="100%" $alignItems="center" $justifyContent="center">
			<CustomBox $backgroundColor="#2B2B2B" $width="100%">
				<CustomColumn $width="100%" $alignItems="center" $justifyContent="center">
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
				</CustomColumn>
			</CustomBox>
		</CustomColumn>
	);
};

export default ComplainBox;
