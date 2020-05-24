import React from 'react';
import profile from './../../assets/Logo.png';
import MyCard from './components/MyCard';
import NavList from './components/NavList';
import { Container, Header, NavBar } from './styles';

export default function Home() {

    return (
        <>
            <Header>
                <NavBar>
                    <a href="#">
                        <img src={profile} className="logo" alt="Logo" />
                    </a>
                    <NavList />
                </NavBar>
            </Header>

            <Container>
                <MyCard />
            </Container>
        </>
    );
}
