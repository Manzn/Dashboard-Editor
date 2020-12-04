// styles/global.js
import css from 'styled-jsx/css'

export default css.global`
  body {
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.8;
    color: #AFB1B7;
    font-family: sans-serif;
  }
  h1 {
    font-weight: 700;
  }
  p {
    margin-bottom: 10px;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }
   
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
   
  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`
