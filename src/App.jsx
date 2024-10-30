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
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSimilarCaseGroups, setSelectedSimilarCaseGroups] = useState([]);

  // 데이터가 준비된 후 첫 번째 카테고리의 similar_case_groups 설정
  useEffect(() => {
    if (categories.length > 0 && !selectedCategory) {
      console.log('첫 번째 카테고리 선택 및 데이터 설정');
      const firstCategory = categories[0];
      setSelectedCategory(firstCategory); // 첫 번째 카테고리 선택
      updateSimilarCaseGroups(firstCategory); // similar_case_groups 설정
    }
  }, [categories, data]);

  const updateSimilarCaseGroups = (categoryName) => {
    const categoryData = data.find((item) => item.category_name === categoryName);
    if (categoryData) {
      setSelectedSimilarCaseGroups(categoryData.similar_case_groups); // 데이터 설정
    } else {
      console.warn(`카테고리 ${categoryName}에 해당하는 데이터가 없습니다.`);
    }
  };

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

  return (
    <>
      <ResetCss />
      <Container>
        <SideBar
          showCategories={showCategories}
          categories={categories}
          isLoading={isLoading}
          selectedCategory={selectedCategory}
          onCategorySelect={(category) => {
            setSelectedCategory(category);
            updateSimilarCaseGroups(category); // 선택된 카테고리의 데이터 설정
          }}
        />
        <Main>
          <MainPage
            onStartClick={handleStartClick}
            onCategoriesExtracted={(categories, fullData) =>
              handleCategoriesExtracted(categories, fullData)
            }
            similarCaseGroups={selectedSimilarCaseGroups}
          />
        </Main>
      </Container>
    </>
  );
}

export default App;
