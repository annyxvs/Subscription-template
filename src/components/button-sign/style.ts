import styled from "styled-components";

export const button_S = styled.button`
  display:flex;
  align-items:center;

  padding: 0.3rem;
  margin: 1rem;

  border: none;
  font-size: 1rem;

  background-color: transparent;
  border: 0.15rem solid #0B2B36;
  border-radius: 0.2rem;

  opacity: 0.8;
  cursor: pointer;

  p{
    padding: 0.2rem;
  }

    transition:0.5s;

    &:hover{
      background-color: #0B2B36;
      
      color: white;
    }
`