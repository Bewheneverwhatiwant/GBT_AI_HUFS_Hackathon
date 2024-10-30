import React from 'react';
import axios from 'axios'; // axios 임포트
import CustomColumn from '../../components/CommonComponents/CustomColumn';
import CustomButton from '../../components/CommonComponents/CustomButton';
import CustomFont from '../../components/CommonComponents/CustomFont';
import CustomRow from '../../components/CommonComponents/CustomRow';

// 비동기 API 호출 함수
const fetchCategorizedData = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER}/categorized`);
        console.log('API 호출 성공:', response.data); // 응답 데이터 출력
    } catch (error) {
        console.error('API 호출 실패:', error); // 에러 출력
    }
};

const A_CoverComponent = ({ onStartClick }) => {
    const handleStartClick = () => {
        fetchCategorizedData(); // API 호출
        onStartClick(); // 기존 클릭 핸들러 호출
    };

    return (
        <CustomColumn $width="90%" $alignItems="center" $justifyContent="center" $gap="20rem">
            <CustomColumn $alignItems="center" $justifyContent="center" $gap="5rem">
                <CustomFont $color="white" $font="2.3rem" $fontWeight="bold">
                    민원 분류 및 그룹화 AI 모델
                </CustomFont>

                <CustomButton $width="20rem" $backgroundColor="#464646" onClick={handleStartClick}>
                    <CustomFont $color="white" $font="1rem" $fontWeight="bold">
                        시연시작
                    </CustomFont>
                </CustomButton>
            </CustomColumn>

            <CustomRow $width="100%" $alignItems="center" $justifyContent="flex-end">
                <CustomColumn $width="40%" $alignItems="flex-end" $justifyContent="center" $gap="0.5rem">
                    <CustomFont $color="white" $font="2rem" $fontWeight="bold">
                        GBT 학부 AI 해커톤
                    </CustomFont>
                </CustomColumn>
            </CustomRow>
        </CustomColumn>
    );
};

export default A_CoverComponent;
