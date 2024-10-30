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
  flex-direcion: column; 
  flex: 1;
  margin-left: 15rem;
  background-color: black;
  padding-top: 8vh;
  padding-bottom: 8vh;
`;

function App() {

  const [showCategories, setShowCategories] = useState(false);

  const handleStartClick = () => {
    // console.log('handleStartClick 호출됨');
    setShowCategories(true); // 버튼 클릭 시 카테고리 표시
  };

  return (
    <>
      <ResetCss />
      <Container>
        <SideBar showCategories={showCategories} /> {/* 상태 전달 */}
        <Main>
          <MainPage onStartClick={handleStartClick} />
        </Main>
      </Container>
    </>
  )
}

export default App