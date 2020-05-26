import React from 'react';
import About from './layouts/About';
import Home from './layouts/Home';
import './styles/fonts.css';
import GlobalStyle from './styles/global';

function App() {
    return (
        <>
            <GlobalStyle />
            <Home />
            <About />
        </>
    );
}

export default App;
