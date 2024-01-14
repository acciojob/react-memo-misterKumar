import React from "react";
import ToDo from "./Todo";
import Counter from "./Counter";
import Memo from "./Memo";
 
const App = () =>{
    return(
       <div id="main">
           <ToDo/>
           <Counter/>
           <Memo/>
       </div>
    )
}
 
export default App;