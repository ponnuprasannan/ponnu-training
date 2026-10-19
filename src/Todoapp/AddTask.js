import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const AddTask = ({addTask}) => {
    const [value,setValue] = useState("");
    const addItem = () => {
        addTask(value);
        setValue("");
    };
  return (
    <div className='input-container'>
        <div>
            <input type='text' className='input' placeholder='Add a New Task'
            onChange={(e)=>{setValue(e.target.value)}} value={value}/>
            <Button onClick={addItem} className='add-btn'>ADD</Button>
        </div>
    </div>
  )
}

export default AddTask