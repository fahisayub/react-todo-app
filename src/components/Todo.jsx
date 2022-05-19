import React,{useState} from "react";
 import style from '../styles/todo.module.css'
import TodoList from "./TodoList";
import {v4 as uuidv4} from 'uuid';
const Todo =()=>{

const [query, setQuery]=useState('');
const [tasks, setTask]=useState([]);

const onDelete=(id)=>{
    let newlist=tasks.filter(list=>list.id!==id);
    setTask(newlist);

}

const onenterhandler=(e)=>{
    if(e.key==='Enter'){
        // const newTask={
        //     id:Date.now(),
        //     title:query,
        //     isConplete:false,
        // }
        let tasklist=[...tasks,{ id:uuidv4(),title:query,isComplete:false }];
        setTask(tasklist);
        console.log(tasklist);
        setQuery('');

    }
}
const handleadd=()=>{
    let tasklist=[...tasks,{ id:uuidv4(),title:query,isComplete:false }];
        setTask(tasklist);
        console.log(tasklist);
        setQuery('');

}
const handlechange=(e)=>{
const {value}=e.target;
setQuery(value);
}

    return <div className={style.todo}>
        <h2>Tasks</h2>
        <TodoList tasks={tasks} onDelete={onDelete}/>
        <div className={style.inputbox}>
        <input value={query} onKeyDown={onenterhandler} onChange={handlechange} type="text" placeholder="Add tasks here" />
        <button onClick={handleadd}>+</button>
        </div>
        
       
        
    </div>
}
export default Todo;