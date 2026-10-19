import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'

const Header = () => {

    const [colour, setColour] = useState("Green");
    const [count,setCount] = useState(0);

    // const onClicklog = () => {
    //     console.log("You Clicked Me")
    
    // const doubleClick = (name) =>{
    //     alert("Hey" + name)
    // }
    // const onMouseClick = (name) =>{
    //     alert("Enter the value");
    // }
    const changeColour = () => {
        setColour("Red");
    } 
    const incrementCount = () =>{

        setCount(count+1);

    }
    const decrement = () =>{

        setCount(count-1);

    }
  return (
    <div>
        {/* <h1 onDoubleClick={() => doubleClick(" Ponnu")}>My React App</h1>
        <Button onClick={onClicklog}>Click</Button>
        <input onKeyDown={onMouseClick} type="text" /> */}

        <h1> My Favourite colour is  {colour} </h1>
        <Button onClick={changeColour}> Change Color </Button>
        <br />
        <br />
        <h1>Count is {count}</h1>
        <Button onClick={incrementCount} className='m-1 bg-success'>+</Button>
        <Button onClick={decrement} className='bg-danger' >-</Button>
    
    </div>
  )
}

export default Header