import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList.js';


function App() {
    let count = 0
    let name = "M"
    function addcount(){
        count = count +1
    }
    return (
        
        <div className='todo-app'>
          <List/>
          <List/>
          <Title/>
          <Contents/>
          <Contents data= {count} data2={name} addcount={addcount}/>
        </div>
    );
}

function Contents(props){
    console.log(props.data, "render")
    let myStates = useState(0)
    let state = myStates[0]
    let setState = myStates[1]
    console.log(state, setState)
   
    return(
        <div>
        content{props.data}
        <button onClick={()=>{
            console.log("click")
            setState(state + 1)
            // props.data = props.data + 1
            console.log(props.data)
            }}>
            클릭
            </button>

        </div>
    )
}

function List(){
    return (
    <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
</ul>
)
}
function Title(){
    return(
        <div>
        title
        </div>
    )
}


export default App;