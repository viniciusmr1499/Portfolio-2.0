import React, { useState } from 'react';
import { FaConnectdevelop } from 'react-icons/fa';
import Avatar from './../../assets/Me.jpg';
import MyCard from './components/MyCard';
import NavList from './components/NavList';
import { Container, Header, NavBar, Toggle } from './styles';


export default function Home() {
    const [on, setOn] = useState(false);

    function handleToggle() {
        const collapse = document.querySelector('.collapse-nav');
        const collapseToggled = document.querySelector('.collapse-nav.toggled');

        if (collapse && !collapseToggled) {
            setOn(true);
            collapse.classList.add('toggled');
            console.log('opa')
        } else {
            setOn(false);
            console.log('nao opa')
            collapse.classList.remove('toggled');
        }
    }

    return (
        <>
            <Header>
                <NavBar>
                    <a href="/" className="logo">
                        Vinícius
                        <FaConnectdevelop size={34} />
                    </a>
                    <Toggle on={on} onClick={handleToggle}>
                        <span className="icon__bar"></span>
                        <span className="icon__bar"></span>
                        <span className="icon__bar"></span>
                    </Toggle>
                    <NavList />
                </NavBar>
            </Header>

            <Container id="home">
                <MyCard title="Marcos Vinicius" subTitle="Software Developer" avatar={Avatar} />
            </Container>
        </>
    );
}
