import React from 'react';
import About from './layouts/About';
import Contact from './layouts/Contact';
import Footer from './layouts/Footer';
import Home from './layouts/Home';
import Portfolio from './layouts/Portfolio';
import Resume from './layouts/Resume';
import Skills from './layouts/Skills';
import './styles/fonts.css';
import GlobalStyle from './styles/global';

function App() {
    return (
        <>
            <GlobalStyle />
            <Home />
            <About />
            <Skills />
            <Resume />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
