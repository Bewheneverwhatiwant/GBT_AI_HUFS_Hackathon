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

const SideBar = ({ showCategories, categories, selectedCategory, onCategorySelect, isLoading }) => {
	useEffect(() => {
		if (categories.length > 0 && !selectedCategory) {
			console.log('첫 번째 카테고리 자동 선택:', categories[0]);
			onCategorySelect(categories[0]); // 첫 번째 카테고리 선택
		}
	}, [categories, selectedCategory, onCategorySelect]);

	return (
		<SideBarContainer>
			<CustomColumn
				$width="100%"
				$height="100vh"
				$alignItems="center"
				$justifyContent="flex-start"
				$gap="1rem"
			>
				<CustomRow $width="100%" $alignItems="center" $justifyContent="flex-start">
					<CustomFont $color="#AFAFAF" $fontWeight="bold" $font="1.5rem">
						Category
					</CustomFont>
				</CustomRow>

				{isLoading ? (
					<CustomFont $color="white" $font="1rem">
						로딩 중...
					</CustomFont>
				) : (
					showCategories &&
					categories.map((category, index) => (
						<CustomRow key={index} $width="100%" $alignItems="center" $justifyContent="flex-start">
							<CustomButton
								$justifyContent="flex-start"
								$gap="1rem"
								$width="90%"
								$backgroundColor={selectedCategory === category ? '#282D31' : 'transparent'}
								$hoverColor="#282D31"
								onClick={() => onCategorySelect(category)}
							>
								<CustomFont $color="white" $font="1rem">
									{category}
								</CustomFont>
							</CustomButton>
						</CustomRow>
					))
				)}
			</CustomColumn>
		</SideBarContainer>
	);
};

export default SideBar;
