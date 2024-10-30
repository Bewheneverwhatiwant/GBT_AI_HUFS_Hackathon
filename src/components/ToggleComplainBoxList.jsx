import React, { useState } from 'react';

import CustomColumn from './CommonComponents/CustomColumn';
import CustomBox from './CommonComponents/CustomBox';
import CustomFont from './CommonComponents/CustomFont';
import CustomDivider from './CommonComponents/CustomDivider';
import CustomButton from './CommonComponents/CustomButton';
import CustomRow from './CommonComponents/CustomRow';

import styled from 'styled-components';

const CustomInput = styled.input`
    background-color: transparent;
    border: 1px solid #464646;
    border-radius: 0.5rem;
    padding: 0.5rem;
    font-size: 1rem;
    color: white;
    outline: none; /* 포커스 시 기본 outline 제거 */

    &:focus {
        border-color: #537042; /* 포커스 시 테두리 색상 변경 */
    }
`;

const ToggleComplainBoxList = () => {

	const [isEditing, setIsEditing] = useState(false); // 수정 모드 여부
	const [answer, setAnswer] = useState('담당공무원 추천 답변 내용'); // 답변 내용 상태
	const [inputValue, setInputValue] = useState(answer); // input 필드의 값

	const [borderColor, setBorderColor] = useState('#2B2B2B'); // 기본 border 색상

	const handleEditToggle = () => {
		setIsEditing(!isEditing); // 수정 모드 토글
		setInputValue(answer); // input 초기화
	};

	const handleRegister = () => {
		setAnswer(inputValue); // input의 값을 텍스트로 저장
		setIsEditing(false); // 수정 모드 종료
		setBorderColor('#537042'); // border 색 변경
		alert('답변이 등록되었습니다!'); // 알림 표시
	};

	return (
		<CustomBox $backgroundColor='#2B2B2B' $width='100%' border={borderColor}>
			<CustomColumn $width='100%' $alignItems='center' $justifyContent='center'>
				<CustomFont $color='white' $font='1rem'>
					민원인 민원 1
				</CustomFont>

				<CustomRow $width='100%' $alignItems='center' $justifyContent='flex-end' $gap='0.5rem'>
					<CustomFont $color='#464646' $font='1rem' $fontWeight='bold'>
						접수일자:
					</CustomFont>
					<CustomFont $color='#464646' $font='1rem' $fontWeight='bold'>
						2024.10.30
					</CustomFont>
				</CustomRow>

				<CustomDivider $backgroundColor='#D9D9D9' />

				{isEditing ? (
					<CustomInput
						type='text'
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
					/>
				) : (
					<CustomFont $color='white' $font='1rem'>
						{answer}
					</CustomFont>
				)}

				<CustomRow $width='100%' $alignItems='center' $justifyContent='flex-end' $gap='1rem'>
					{isEditing ? (
						<>
							<CustomButton $backgroundColor='#464646' onClick={() => setInputValue('담당공무원 추천 답변 내용')}>
								<CustomFont $color='white' $font='1rem'>추천 답변으로 초기화</CustomFont>
							</CustomButton>
							<CustomButton $backgroundColor='#464646' onClick={handleRegister}>
								<CustomFont $color='white' $font='1rem'>답변 등록</CustomFont>
							</CustomButton>
						</>
					) : (
						<CustomButton $backgroundColor='#464646' onClick={handleEditToggle}>
							<CustomFont $color='white' $font='1rem'>답변 수정</CustomFont>
						</CustomButton>
					)}
				</CustomRow>
			</CustomColumn>
		</CustomBox>
	);
};

export default ToggleComplainBoxList;
