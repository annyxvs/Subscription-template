import React from "react";

import * as S from "../style/style";

import Input from "../components/input/Input";
import Button_sign from "../components/button-sign/Button-sign";
import image from '../icon/image.png'
import { AiOutlineGoogle } from 'react-icons/ai'
import { RiFacebookCircleFill } from 'react-icons/ri'

const Main = () =>{
  return(
    <S.Main>
      <S.Grid>
        <S.Aside>
            <div className="text">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa mollitia praesentium.
              </p>
            </div>
            <div className="image">
              <img src={image} alt="" />
            </div>
        </S.Aside>

        <S.Content>
          <div className="content">
             
             <h1>Create Accont</h1>
            
            <S.Bnt_sign> 
              <Button_sign text="Google">
                <AiOutlineGoogle/>
              </Button_sign>
              <Button_sign text="Facebook">
                <RiFacebookCircleFill/>
              </Button_sign>
            </S.Bnt_sign>
              
              <p>-Or-</p>
            <form>
              <Input type="text" text="Your name..."/>
              <Input type="email" text="Your email..."/>
              <Input type="password" text="Your password..."/>
              <S.Bnt_Create type='submit' value='Creat Accont'/>
            </form> 
          </div>
        </S.Content>
      </S.Grid>
    </S.Main>
  )
}

export default Main;