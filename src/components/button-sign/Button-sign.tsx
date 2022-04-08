import React from "react";
import { ReactNode } from "react";

import * as S from './style'

type Props = {
  text ?: string;
  children ?: ReactNode;
}

const Button_sign = (props:Props)=> {
  return(
    <S.button_S>
      {props.children}
      <p>Sign up with {props.text}</p>
    </S.button_S>
  )

}

export default Button_sign;