import { createGlobalStyle } from 'styled-components';

// colors #41c2fb #03b3fd

/**
 * font-family: 'Roboto', sans-serif;
 * font-family: 'Open Sans', sans-serif;
 * font-family: 'Lato', sans-serif;
 *
 */

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: none;
        border: none;
        text-decoration: none;
        box-sizing: border-box;
        list-style: none;
        vertical-align: baseline;
    }

    body, html, #root {
        height: 100%;
        -webkit-font-smoothing: antialiased;
        padding-top:1.7rem;
    }

    body {
        line-height: 1;
        background: #1d1c22;
        color: #fff;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    h1 {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 2rem;
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyle;
