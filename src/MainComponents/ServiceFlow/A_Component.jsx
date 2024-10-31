import React from 'react';
import axios from 'axios';
import CustomColumn from '../../components/CommonComponents/CustomColumn';
import CustomButton from '../../components/CommonComponents/CustomButton';
import CustomFont from '../../components/CommonComponents/CustomFont';
import CustomRow from '../../components/CommonComponents/CustomRow';

// category_name 추출 함수
const fetchCategorizedData = async (onCategoriesExtracted) => {
    try {
        const params = {
            skip: 0,
            limit: 5,
            search_top_k: 10, // 각 민원당 검색할 유사 민원 수
            category_skip: 0,
            category_limit: 20, // 각 카테고리별로 반환할 민원 수
        };

        const response = await axios.get(`${import.meta.env.VITE_SERVER}/categorized`, {
            params: params
        });
        const data = response.data;

        console.log('API 호출 성공:', data);

        // 모든 category_name을 추출하고 중복 제거
        const uniqueCategories = [
            ...new Set(data.map((item) => item.category_name)),
        ];

        console.log('추출된 고유 category_name:', uniqueCategories);

        // 추출된 category_name과 응답값 전체(data)를 부모 컴포넌트로 전달
        onCategoriesExtracted(uniqueCategories, data);
    } catch (error) {
        console.error('API 호출 실패:', error);
    }
};

const A_CoverComponent = ({ onStartClick, onCategoriesExtracted }) => {
    const handleStartClick = () => {
        fetchCategorizedData(onCategoriesExtracted); // API 호출 및 데이터 전달
        onStartClick(); // 기존의 시작 핸들러 호출
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
