import './App.css';
import styled from "styled-components";

//header
import { FaSun } from 'react-icons/fa';


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
  height:100%;
  max-height:300px;
  overflow:hidden;
  border-radius:20px;
  background-color:#fff;
`;

//HeaderStyled
const TodoHeader = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  padding:15px 30px;
`;

//HeaderStyled
const TodoHeaderButton = styled.ul`
  display:flex;
  gap:1rem;
  font-size:1rem;
  color:#e88839;
  font-weight:600;
`;

function App() {
  return (
    <Container>
      <TodoAppWrap>
        <TodoHeader>
          <button><FaSun /></button>
          <TodoHeaderButton>
            <li><button>All</button></li>
            <li><button>Active</button></li>
            <li><button>Completed</button></li>
          </TodoHeaderButton>
        </TodoHeader>
        <div className='todoContent'></div>
        <div className='todoBottom'></div>
      </TodoAppWrap>
    </Container>
  );
}

export default App;
