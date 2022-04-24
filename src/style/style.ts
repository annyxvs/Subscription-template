import styled from "styled-components";

export const Main = styled.div`
  padding: 0;
  margin: 0;
  overflow: hidden;
  height:100vh;
  width:100vw;

  background-color:#4B4237;

  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

  font-family: 'Poppins', sans-serif;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.95fr 1fr;
`
export const Aside = styled.div`
    padding:6rem;
  
    p{
      color:#EDE7D9;
      opacity:0.7;
    }

  img{
    position: absolute;
    left: 4rem;
    bottom: 6rem;

    width: 50vw;
    height: 60vh;
  }
`

export const Content = styled.div`
  height:100vh;
  width:100%;

  background-color: #EDE7D9;
  border-radius: 2rem 0rem 0rem 2rem;

  padding:4rem;

  display:flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  h1{
    color: #0b2b36;
  }
`

export const Bnt_sign = styled.div`
  display: flex;
  width: auto;

  margin: 1rem;
  margin-left: 5rem;
`

export const Bnt_Create = styled.input`
  margin-top: 2rem;
  margin-left: 3rem;

  width: 70%;

  border:none;
  border-radius: 0.2rem;
  background-color: #0B2B36;
  color: #EDE7D9;

  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;

  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  font-family: 'Poppins', sans-serif;

  padding: 0.5rem;

  transition: 0.5s;

  &:hover{
    background-color: #233034;
  }
`
