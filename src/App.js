import './App.css';
import styled from "styled-components";
import TodoBottom from './component/TodoBottom';
import TodoHeader from './component/TodoHeader';
import TodoContent from './component/TodoContent';

//1. add기능 추가하기
//2. 탭기능 추가하기
//3. 체크박스 기능 활성화하기
//4. 삭제기능 추가하기

//컴포넌트 
const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  height:100vh;
  background-color:rgb(66,70,82);
`;
const TodoAppWrap = styled.div`
  width:100%;
  max-width:400px;
  overflow:hidden;
  border-radius:20px;
  box-shadow:0px 0px 21px rgba(0,0,0,0.3)
`;

function App() {
  return (
    <Container>
      <TodoAppWrap>
        <TodoHeader/>
        <TodoContent/>
        <TodoBottom/>
      </TodoAppWrap>
    </Container>
  );
}

export default App;
