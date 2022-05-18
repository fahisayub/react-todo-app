import React, { useState } from "react";
import style from '../styles/todoitem.module.css'
const TaskItem=({ id,title,isComplete, onDelete} )=>{
const [isCompleted,setisCompleted]=useState(isComplete);

const handleChecked=(e)=>{
 console.log(e.target.checked);
 const {checked}=e.target;
 setisCompleted(checked);
}

    return <div  className={style.item}>
       <button className={style.delbtn} onClick={()=>(onDelete(id))}>x</button>
  <h2 className={isCompleted?style.striker:''}>{title}</h2>
  <input type="checkbox" className={style.checkbox}    checked={isCompleted} onChange={handleChecked} />
  
    </div>
}
export default TaskItem;