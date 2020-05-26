import React from 'react';
import { FaConnectdevelop } from 'react-icons/fa';
// import Avatar from './../../assets/Euu.jpg';
import Avatar from './../../assets/Profile.jpg';
// import Avatar from './../../assets/Lara.jpg';
// import profile from './../../assets/Logo-transparente.png';
// import Avatar from './../../assets/me.jpg';
import MyCard from './components/MyCard';
import NavList from './components/NavList';
import { Container, Header, NavBar } from './styles';


export default function Home() {

    return (
        <>
            <Header>
                <NavBar>
                    <a href="/" className="logo">
                        Vinícius
                        <FaConnectdevelop size={34} />
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
