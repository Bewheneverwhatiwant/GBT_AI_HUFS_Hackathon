import React, { useState, useEffect } from 'react';
import SideBar from './components/SideBar';
import MainPage from './MainComponents/mainpage';
import ResetCss from './ResetCss';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  background-color: transparent;
`;

const Main = styled.main`
  width: calc(100% - 15rem);
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 15rem;
  background-color: black;
  padding-top: 8vh;
  padding-bottom: 8vh;
`;

function App() {
  const [showCategories, setShowCategories] = useState(false);
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);
  const [selectedCategoryData, setSelectedCategoryData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null); // 선택된 카테고리 상태

  useEffect(() => {
    // 첫 번째 카테고리 자동 선택
    if (categories.length > 0 && !selectedCategory) {
      const firstCategory = categories[0];
      setSelectedCategory(firstCategory); // 첫 번째 카테고리 선택
      setSelectedCategoryData(data.find(item => item.category_name === firstCategory));
    }
  }, [categories, data, selectedCategory]);

  const handleStartClick = () => {
    console.log('handleStartClick 호출됨');
    setShowCategories(true);
    setIsLoading(true);
  };

  const handleCategoriesExtracted = (extractedCategories, fullData) => {
    console.log('카테고리 이름들 전달 성공:', extractedCategories);
    console.log('전체 데이터:', fullData);

    if (!extractedCategories || !fullData || extractedCategories.length === 0) {
      console.error('카테고리 데이터가 비어 있거나 잘못되었습니다.');
      setIsLoading(false);
      return;
    }

    setCategories(extractedCategories);
    setData(fullData);
    setIsLoading(false);
  };

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
    const categoryData = data.find(item => item.category_name === categoryName);
    if (categoryData) {
      setSelectedCategoryData(categoryData);
    }

    // 스크롤을 맨 위로 이동
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <ResetCss />
      <Container>
        <SideBar
          showCategories={showCategories}
          categories={categories}
          isLoading={isLoading}
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
        />
        <Main>
          <MainPage
            onStartClick={handleStartClick}
            onCategoriesExtracted={handleCategoriesExtracted}
            selectedCategoryData={selectedCategoryData}
          />
        </Main>
      </Container>
    </>
  );
}

export default App;
