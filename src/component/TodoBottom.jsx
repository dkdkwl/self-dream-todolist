import { useState } from "react";
import styled from "styled-components";

  //Bottom Styled
  const TodoAdd = styled.div`
    background-color:#1a1c34;
    padding:25px 30px;
    display:flex;
  `;

  const TodoAddInput = styled.div`
    width:100%;
    border-radius:7px;
    overflow:hidden;
    border:1px solid #666;
    form{
      height:100%
    }
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

  export default function TodoBottom() {
    const [text,setText] = useState('');
    const [todos, setTodos] = useState({
      
    })
    const onSubmit = (e)=>{
      e.preventDefault();
    }
    const handleChange = (e)=>{
      //새로운 투두를 todos에 업데이트 해야 함
      setText(e.target.value)
      
    }

  return (
      <TodoAdd>
        <TodoAddInput>
        <form onSubmit={onSubmit}>
            <input className='inputAdd' type="text" value={text} onChange={handleChange}/>
            <button type='submit'>Add</button>
        </form>
        </TodoAddInput >
    </TodoAdd>
  )
}
