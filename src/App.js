import './App.css';
import styled from "styled-components";

//header
import { FaSun,FaTrash } from 'react-icons/fa';


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

//HeaderStyled
const TodoHeader = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  padding:15px 30px;
  background-color:#1a1c34;
  border-bottom:1px solid #36394f;
`;
const TodoHeaderButton = styled.ul`
  display:flex;
  gap:1rem;
  font-size:1rem;
  color:#e88839;
  font-weight:600;
`;


//Content Styled
const TodoContent = styled.div`
  min-height:200px;
  max-height:600px
  height:100%;
  background-color:#22243a;
  padding:15px 30px;
`;

const TodoList = styled.ol`
  display:flex;
  flex-wrap:wrap;
  height:100%;
  background-color:#22243a;
  color:#fff;
  gap:0.425rem;

  li{
    width:100%;    
    display:flex;
    align-items:center;
    justify-content:space-between;

    label{
      display:flex;
      width: calc(100% - 27px);      
      align-items:center;
      p{
        width:100%
      }
    }
    input{
      width:15px;
      height:15px;
      margin:0 10px 0 0;
    }

  }
  `;
  const FaTrashIcon = styled.button`
    width:27px;
    height:27px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:13px;
    border-radius:50%;
    background-color:#4f4f51
  `;

  //Bottom Styled
  const TodoBottom = styled.div`
    background-color:#1a1c34;
    padding:25px 30px;
    display:flex;

  `;

  const TodoBottomAddInput = styled.div`
    width:100%;
    border-radius:7px;
    overflow:hidden;
    border:1px solid #666;
    input{
      border:none;
      background-color:#fff;
      font-size:1rem;
      padding:4px 10px;
      width:calc(100% - 70px);
    }
    button{
      height:100%;
      width:70px;
      background-color:#ef852d;
      font-size:1rem;
      color:#000;
      font-weight:500
    }  
  `;


function App() {
  return (
    <Container>
      <TodoAppWrap>
        <TodoHeader>
          <button><FaSun style={{color:'white'}} /></button>
          <TodoHeaderButton>
            <li><button>All</button><button></button></li>
            <li><button>Active</button></li>
            <li><button>Completed</button></li>
          </TodoHeaderButton>
        </TodoHeader>
        <TodoContent>
          <TodoList>
            <li>
              <label><input type="checkbox" /><p>공부하기</p></label>
              <FaTrashIcon><FaTrash style={{color:'white',cursor:'pointer'}} /></FaTrashIcon>
            </li>
            <li>
              <label><input type="checkbox" /><p>공부하기</p></label>
              <FaTrashIcon><FaTrash style={{color:'white',cursor:'pointer'}} /></FaTrashIcon>
            </li>
            <li>
              <label><input type="checkbox" /><p>공부하기</p></label>
              <FaTrashIcon><FaTrash style={{color:'white',cursor:'pointer'}} /></FaTrashIcon>
            </li>
          </TodoList>
        </TodoContent>
        <TodoBottom>
          <TodoBottomAddInput>
            <input type="text" />
            <button>Add</button>
          </TodoBottomAddInput>
        </TodoBottom>
      </TodoAppWrap>
    </Container>
  );
}

export default App;
