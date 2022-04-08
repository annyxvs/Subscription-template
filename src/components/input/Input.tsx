import React from "react";
import Input_style from './style'

type Props = {
  type: string;
  text: string;
}

const Input = (props:Props) =>{
  return(
    <>
      <Input_style required type={props.type} placeholder={props.text}/>
    </>
  )
}

export default Input;