import React,{useState} from "react";
 import style from '../styles/todo.module.css'
import TodoList from "./TodoList";
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
        let tasklist=[...tasks,{ id:Date.now(),title:query,isComplete:false }];
        setTask(tasklist);
        console.log(tasklist);
        setQuery('');

    }
}
const handleadd=()=>{
    let tasklist=[...tasks,{ id:Date.now(),title:query,isComplete:false }];
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
        <div className={style.listbox}>
        <TodoList tasks={tasks} onDelete={onDelete}/>
        </div>
        <div className={style.inputbox}>
        <input value={query} onKeyDown={onenterhandler} onChange={handlechange} type="text" placeholder="Add tasks here" />
        <button onClick={handleadd}>+</button>
        </div>
        
       
        
    </div>
}
export default Todo;