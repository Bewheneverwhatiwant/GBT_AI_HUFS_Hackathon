import React, { useState } from 'react';
import styled from 'styled-components';

import CustomColumn from '../../components/CommonComponents/CustomColumn';
import CustomButton from '../../components/CommonComponents/CustomButton';
import CustomFont from '../../components/CommonComponents/CustomFont';
import CustomRow from '../../components/CommonComponents/CustomRow';
import ComplainBox from '../../components/ComplainBox';

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 0.4rem solid transparent;
  border-right: 0.4rem solid transparent;
  border-bottom: 0.7rem solid #D9D9D9;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(0deg)' : 'rotate(180deg)')};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
`;

const DropdownWrapper = styled.div`
  position: relative;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  border-radius: 0.5rem;
  z-index: 10;
`;

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const B_ComplainListComponent = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState({ all: false, order: false });
	const [allFilter, setAllFilter] = useState('전체조회');
	const [orderFilter, setOrderFilter] = useState('최신순');

	const toggleDropdown = (type) => {
		setIsDropdownOpen((prev) => ({
			...prev,
			[type]: !prev[type],
		}));
	};

	const handleSelect = (type, value) => {
		if (type === 'all') setAllFilter(value);
		if (type === 'order') setOrderFilter(value);

		setIsDropdownOpen({ all: false, order: false });
	};

	return (
		<CustomColumn $width="90%" $alignItems="center" $justifyContent="flex-start">
			<CustomRow $width="100%" $alignItems="center" $justifyContent="flex-end" $gap="1rem">
				<DropdownWrapper>
					<CustomButton
						$flexdirection="row"
						$justifyContent='center'
						$width="13rem"
						$backgroundColor="#2B2B2B"
						$gap="2rem"
						onClick={() => toggleDropdown('all')}
					>
						<Triangle isOpen={isDropdownOpen.all} />
						<CustomFont $color="white" $font="1rem">{allFilter}</CustomFont>
					</CustomButton>

					{isDropdownOpen.all && (
						<Dropdown>
							{['전체조회', '답변 완료만 조회', '답변 미완료만 조회'].map((item) => (
								<DropdownItem key={item} onClick={() => handleSelect('all', item)}>
									<input type="radio" name="allFilter" checked={allFilter === item} readOnly />
									<CustomFont $color="black" $font="1rem">{item}</CustomFont>
								</DropdownItem>
							))}
						</Dropdown>
					)}
				</DropdownWrapper>

				<DropdownWrapper>
					<CustomButton
						$flexdirection="row"
						$justifyContent='center'
						$width="9rem"
						$backgroundColor="#2B2B2B"
						$gap="2rem"
						onClick={() => toggleDropdown('order')}
					>
						<Triangle isOpen={isDropdownOpen.order} />
						<CustomFont $color="white" $font="1rem">{orderFilter}</CustomFont>
					</CustomButton>

					{isDropdownOpen.order && (
						<Dropdown>
							{['최신순', '오래된 순'].map((item) => (
								<DropdownItem key={item} onClick={() => handleSelect('order', item)}>
									<input type="radio" name="orderFilter" checked={orderFilter === item} readOnly />
									<CustomFont $color="black" $font="1rem">{item}</CustomFont>
								</DropdownItem>
							))}
						</Dropdown>
					)}
				</DropdownWrapper>
			</CustomRow>

			<CustomColumn $width="100%" $alignItems="center" $justifyContent="center" $gap="6rem">
				<ComplainBox />
				<ComplainBox />
			</CustomColumn>
		</CustomColumn>
	);
};

export default B_ComplainListComponent;
