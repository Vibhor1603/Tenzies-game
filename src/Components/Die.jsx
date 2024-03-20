/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function Die(props){
return(
<div className="container" >
<button  className="dice-btn"  onClick={props.changeColor} style={{
    backgroundColor: props.isHeld ? '#59E391' : '',
  }} ><h2>{props.value}</h2></button>
</div>
)  
}