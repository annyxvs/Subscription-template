import styled from "styled-components";

const Input_style = styled.input`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,100&display=swap');
  font-family: 'Poppins', sans-serif;

  display: block;

  width: 33vw;

  margin: 2rem;
  margin-left: 5rem;
  padding: 1rem;
  padding-bottom: 0.2rem;

  border:none;
  background-color:transparent;

  border-bottom: 0.15rem solid rgba(11, 43, 54,0.6);

  transition: 0.5s;

  &:focus{
    border-bottom: 0.15rem solid rgba(11, 43, 54,0.8);
  }
`

export default Input_style;