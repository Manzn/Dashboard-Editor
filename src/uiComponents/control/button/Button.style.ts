// styles/global.js
import css from 'styled-jsx/css'

export default css`
    .ui-button {
        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;

        min-width: 50px;
        height: 50px;
        padding: 0 10% 0 10%;
        margin-top: auto;

        border-radius: 4px;
    }

    .ui-button:hover {
        background-image: linear-gradient(350deg, #307FCA 60%, #2CC2A8);
    }
`
