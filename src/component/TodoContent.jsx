import React,{useState} from 'react'
import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';

//Content Styled
const TodoContentArea = styled.div`
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

export default function TodoContent() {
    const [todoList,setTodoList] = useState([
        {id : '123',text : '장보기',status : 'active'},
        {id : '123',text : '공부하기',status : 'active'},
        {id : '123',text : '놀기',status : 'active'}
      ]);    
  return (
    <TodoContentArea>
        <TodoList>
        {
            todoList.map((items , i)=>{
            return(
                <li key={i}>
                    <label><input type="checkbox"/><p>{items.text}</p></label>
                    <FaTrashIcon><FaTrash style={{color:'white',cursor:'pointer'}} /></FaTrashIcon>
                    </li>
                )
            })
        }
        </TodoList>
    </TodoContentArea>
  )
}
