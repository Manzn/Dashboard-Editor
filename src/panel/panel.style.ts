// styles/global.js
import css from 'styled-jsx/css'

export default css`
    .panel {
        position: absolute;
        
        margin: 10px 0 0 10px;
        resize: both;
        overflow: auto;

        min-width: 100px;
        min-height: 100px;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 35px;
    }
`
