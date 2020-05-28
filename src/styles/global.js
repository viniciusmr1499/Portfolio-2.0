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

    body::-webkit-scrollbar {
        width: .6em !important;
    }

    body::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3) !important;
    }

    body::-webkit-scrollbar-thumb {
        background-color: #1CB698 !important;
        outline: 1px solid slategrey !important;
    }

    body, html, #root {
        height: 100%;
        -webkit-font-smoothing: antialiased;
        scroll-behavior: smooth;
    }

    body {
        line-height: 1;
        background: #1E2326;
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
