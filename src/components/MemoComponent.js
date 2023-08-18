import React, { useState, useEffect } from 'react';
import { FaPlus } from "react-icons/fa";
import "../styles/App.css"
const MemoComponent = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [memoText, setMemoText] = useState('');
  const [memoItems, setMemoItems] = useState([]);
  const [expense, setExpense]=useState(0);

  const handleAddTodo = () => {
    setTodos([...todos, 'New todo']);
  };

  
  const handleIncrement = () => {
    setCount(count+1);
     /* console.log(count) */
    setExpense(expense+count);
    /* console.log(expense) */
  };

  const handleMemoTextChange = (event) => {
    setMemoText(event.target.value);
  };

  const handleAddMemoItem = () => {
    if (memoText.length > 5) {
      setMemoItems([...memoItems, memoText]); 
      setMemoText('');
    }
  };

  return (
    <div id='main'>
      <h1>React.useMemo</h1>

      <h2>My todos</h2>
      <button id='add-todo-btn' onClick={handleAddTodo}>Add Todo</button>
      <div>
        
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
      
     <div className='cc'>
        <p >Count:{count}</p>
        <button id='incr-cnt' onClick={handleIncrement}><FaPlus/></button>
     </div>
     <h2>Expensive Calculation</h2>
     <p>{expense}</p>
      <div>
        <h2>React.memo</h2>
        <input
          type="text"
          id="skill-input"
          placeholder="Enter text (min 6 characters)"
          value={memoText}
          onChange={handleMemoTextChange}
        />
        <button onClick={handleAddMemoItem}>Add Skill</button>
      </div>
      
      <div>
        
        <ul>
          {memoItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default MemoComponent;
