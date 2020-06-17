import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
    * {
        font-family: 'Ubuntu', sans-serif;
        font-weight: bold;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        color : ${ (props) => props.theme.colors.text };
    }
    html, body {
        background: ${ (props) => props.theme.colors.background };
    }
    html {
        scroll-behavior: smooth;
    }
    button:focus {
        outline: none;
    }
`;