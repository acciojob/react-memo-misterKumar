import React,{useState} from 'react'

export default function Memo() {

let [todo,setTodo] = useState(0);
let [count,setCount] = useState(0);
let [skill,setSkill] = useState("");
let [skillList,setSkillList] = useState([]);

function renderTodo(){
    let arr=[];
    for (let index = 0; index < todo; index++) {
        arr.push("New Todo");
    }
    return arr;
}

function addSkillFunc(e){
    e.preventDefault();
    if(skill.length<=5){
        return;
    }
    setSkillList([...skillList,skill]);
    setSkill("");
}

  return (
    <div id='main'>
      <h1>My Todos</h1>
      <div>
        {
            renderTodo().map((item)=>{
                return <p>{item}</p>
            })
        }
      </div>
      <button onClick={()=>setTodo(todo+1)} id='add-todo-btn'>Add Todo</button>
      <div>Count: {count} <button onClick={()=>setCount(count+1)} id='incr-cnt'>+</button></div>
      <h1>React Memo</h1>
      <form action="" onSubmit={(e)=>addSkillFunc(e)}>
      <input type="text" name="memo" id="memo" onChange={(e)=>setSkill(e.target.value)} value={skill}/>
      <button type="submit" id='skill-input'>Add Skill</button>
      </form>
      <ul>
        {
            skillList.map((item)=>{
                return <li>{item}</li>
            })
        }
      </ul>
    </div>
  )
}