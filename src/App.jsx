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
  const [categories, setCategories] = useState([]); // category_name 목록 상태 추가

  const handleStartClick = () => {
    console.log('handleStartClick 호출됨');
    setShowCategories(true); // 카테고리 표시
  };

  const handleCategoriesExtracted = (extractedCategories) => {
    console.log('카테고리 이름들 전달 성공');
    setCategories(extractedCategories); // 카테고리 목록 저장
  };

  return (
    <>
      <ResetCss />
      <Container>
        <SideBar showCategories={showCategories} categories={categories} />
        <Main>
          <MainPage
            onStartClick={handleStartClick}
            onCategoriesExtracted={handleCategoriesExtracted} // 콜백 전달
          />
        </Main>
      </Container>
    </>
  );
}


export default App;
