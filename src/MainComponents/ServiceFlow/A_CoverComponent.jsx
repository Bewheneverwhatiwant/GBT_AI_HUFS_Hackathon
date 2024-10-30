import React from 'react';

import CustomColumn from '../../components/CommonComponents/CustomColumn';
import CustomButton from '../../components/CommonComponents/CustomButton';
import CustomFont from '../../components/CommonComponents/CustomFont';
import CustomRow from '../../components/CommonComponents/CustomRow';

const A_CoverComponent = () => {

    return (

        <CustomColumn $width='90%' $alignItems='center' $justifyContent='center' $gap='3rem'>
            <CustomFont $color='white' $font='2.3rem' $fontWeight='bold'>민원 분류 및 그룹화 AI 모델</CustomFont>

            <CustomButton $width='10rem' $backgroundColor='#464646'>
                <CustomFont $color='white' $font='1rem' $fontWeight='bold'>시연시작</CustomFont>
            </CustomButton>

            <CustomRow $width='100%' $alignItems='center' $justifyContent='flex-end'>
                <CustomColumn $width='40%' $alignItems='flex-end' $justifyContent='center' $gap='0.5rem'>
                    <CustomFont $color='white' $font='1.3rem' $fontWeight='bold'>GBT 학부 AI 해커톤</CustomFont>
                    <CustomFont $color='#464646' $font='1rem' $fontWeight='bold'>팀 월화수목김토일</CustomFont>
                    <CustomFont $color='#464646' $font='1rem' $fontWeight='bold'>팀원 배영민 김토일 박인기 이나영 고은빈</CustomFont>
                </CustomColumn>
            </CustomRow>
        </CustomColumn>

    );
};

export default A_CoverComponent;