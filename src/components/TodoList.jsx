import React from "react";
 import TaskItem from "./Taskitem";
 import style from '../styles/todolist.module.css';
const TodoList=({tasks,onDelete})=>{
    return  <div className={style.listbox}>
    {
        tasks.map((item)=>{
            return  <TaskItem key={item.id} {...item} onDelete={onDelete} />
            
        })
    }
</div>
}
export default TodoList;