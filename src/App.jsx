import { useState } from 'react';
import styled from 'styled-components';
import SideBar from './components/SideBar';
import MainPage from './MainComponents/mainpage';
import ResetCss from './ResetCss';

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
  const [categories, setCategories] = useState([]); // category_name 목록 저장
  const [data, setData] = useState([]); // 전체 API 데이터
  const [selectedCategory, setSelectedCategory] = useState(null); // 선택된 카테고리
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 관리

  const handleStartClick = () => {
    console.log('handleStartClick 호출됨');
    setShowCategories(true);
    setIsLoading(true);
  };

  const handleCategoriesExtracted = (extractedCategories, fullData) => {
    console.log('카테고리 이름들 전달 성공');
    setCategories(extractedCategories);
    setData(fullData);
    setIsLoading(false);
    console.log(fullData);

    if (extractedCategories.length > 0) {
      const firstCategory = extractedCategories[0];
      setSelectedCategory(firstCategory); // 첫 번째 카테고리 기본 선택
      logSimilarCaseGroups(fullData, firstCategory); // 첫 번째 카테고리의 similar_case_groups 출력
    }
  };

  const logSimilarCaseGroups = (data, categoryName) => {
    console.log('logSimilarCaseGroups 호출됨 - 카테고리 이름:', categoryName);
    console.log('데이터 확인:', data);

    if (!data || !categoryName) {
      console.error('데이터 또는 카테고리 이름이 정의되지 않았습니다.');
      setIsLoading(false);
      return;
    }

    const categoryData = data.find((item) => item.category_name.trim() === categoryName.trim());

    if (!categoryData) {
      console.error(`카테고리 ${categoryName}에 해당하는 데이터가 없습니다.`);
      setIsLoading(false);
      return;
    }

    console.log('선택된 카테고리의 similar_case_groups:', categoryData.similar_case_groups);
  };


  return (
    <>
      <ResetCss />
      <Container>
        <SideBar
          showCategories={showCategories}
          categories={categories}
          selectedCategory={selectedCategory}
          isLoading={isLoading}
          onCategorySelect={(category) => {
            setSelectedCategory(category); // 선택된 카테고리 업데이트
            logSimilarCaseGroups(data, category); // 해당 카테고리의 similar_case_groups 출력
          }}
        />
        <Main>
          <MainPage
            onStartClick={handleStartClick}
            onCategoriesExtracted={(categories, fullData) =>
              handleCategoriesExtracted(categories, fullData)
            }
          />
        </Main>
      </Container>
    </>
  );
}

export default App;
