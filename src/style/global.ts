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
  }
  input{
    outline: none;
  }
`

export default GlobalStyle;
