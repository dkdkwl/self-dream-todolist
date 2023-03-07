import styled from "styled-components";
import { FaSun } from 'react-icons/fa';

//HeaderStyled
const TodoHeaderArea = styled.div`
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


export default function TodoHeader() {
  return (
    <TodoHeaderArea>
        <button><FaSun style={{color:'white'}} /></button>
        <TodoHeaderButton>
          <li><button>All</button><button></button></li>
          <li><button>Active</button></li>
          <li><button>Completed</button></li>
        </TodoHeaderButton>
    </TodoHeaderArea>
  )
}
