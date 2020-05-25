import React from 'react';
import Avatar from './../../assets/Euu.jpg';
import profile from './../../assets/Logo-transparente.png';
// import Avatar from './../../assets/me.jpg';
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
                <MyCard title="Marcos Vinicius" subTitle="Software Developer" avatar={Avatar} />
            </Container>

        </>
    );
}
