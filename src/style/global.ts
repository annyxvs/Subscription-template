import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
  }
  html{
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  input{
    outline: none;
  }
`

export default GlobalStyle;
