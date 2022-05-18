import React from "react";
 import TaskItem from "./Taskitem";
const TodoList=({tasks,onDelete})=>{
    return  <>
    {
        tasks.map((item)=>{
            return  <TaskItem key={item.id} {...item} onDelete={onDelete} />
            
        })
    }
</>
}
export default TodoList;