/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import Die from "./Components/Die";
import { nanoid } from "nanoid";
import Confetti from 'react-confetti'


export default function App()
{
  

const[tenzies,setTenzies] = React.useState(false)



function newDice(){
 const diceArr = [];
 for(let i=0;i<10;i++){
  diceArr.push({value:Math.ceil(Math.random()*6), isHeld:false, id:nanoid()});
 }
 return diceArr
}



function hold(id){
  setNumber(item=>
    item.map((die)=> {
      return die.id === id ? {...die,isHeld : !die.isHeld}: die})
  )
  
}

const [number, setNumber]= React.useState(newDice())
function rollDice(){
setNumber(newNumbers=> newNumbers.map(item=>{
  return item.isHeld===true ? item : {value:Math.ceil(Math.random()*6), isHeld:false, id:nanoid()}
}))

}
const newArr =  number.map(num=>{
  return <Die value = {num.value} key={num.id} isHeld={num.isHeld} changeColor={()=>hold(num.id)}/>
})
function restartGame(){
  setTenzies(false)
  setNumber(newDice())
}

React.useEffect(()=>{
const allHeld = number.every(item=> item.isHeld===true) 
const returnValue=number[0].value
const allSame = number.every(item=> returnValue===item.value)
if(allHeld && allSame){
  setTenzies(true)
  console.log("you won YAY")
}
}
  ,[number])

  return(
  <main>z
    <h1 className="title">Tenzies</h1>
    <p className="instructions">{tenzies ? "YAY YOU WON \u{1F389}" : "Roll until all dice are the same. Click each die to freeze it at its current value between rolls."}</p>

    <div className="main-container">
      {newArr}  
    </div>
    <button   className="roll-btn" onClick={!tenzies?rollDice:restartGame} >{!tenzies?"Roll":"Restart"}</button>
    {tenzies && <Confetti tweenDuration={7000} /> }
    
  </main>
  )
}
