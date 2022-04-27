import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  html{
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  input{
    outline: none;
  }
  body{
    width: 100vw;
    height: 100vh;
  }
`

export default GlobalStyle;
