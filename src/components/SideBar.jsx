import React, { useEffect } from 'react';
import styled from 'styled-components';
import CustomColumn from './CommonComponents/CustomColumn';
import CustomFont from './CommonComponents/CustomFont';
import CustomButton from './CommonComponents/CustomButton';
import CustomRow from './CommonComponents/CustomRow';

const SideBarContainer = styled.div`
  width: 15rem;
  position: fixed;
  background-color: #131517;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-y: scroll;

  /* 스크롤바 스타일 */
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #AFAFAF;
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-track {
    background-color: #383838;
  }
`;

const SideBar = ({ showCategories, categories }) => {
	useEffect(() => {
		if (categories.length > 0) {
			console.log('카테고리 이름들 전달 성공');
		}
	}, [categories]);

	return (
		<SideBarContainer>
			<CustomColumn $width="100%" $height="100vh" $alignItems="center" $justifyContent="flex-start" $gap="1rem">
				<CustomRow $width="100%" $alignItems="center" $justifyContent="flex-start">
					<CustomFont $color="#AFAFAF" $fontWeight="bold" $font="1.5rem">
						Category
					</CustomFont>
				</CustomRow>

				{showCategories &&
					categories.map((category, index) => (
						<CustomRow key={index} $width="100%" $alignItems="center" $justifyContent="flex-start">
							<CustomButton $justifyContent="flex-start" $gap="1rem" $width="90%"
								$backgroundColor="transparent" $hoverColor="#282D31">
								<CustomFont $color="white" $font="1rem">{category}</CustomFont>
							</CustomButton>
						</CustomRow>
					))}
			</CustomColumn>
		</SideBarContainer>
	);
};

export default SideBar;
