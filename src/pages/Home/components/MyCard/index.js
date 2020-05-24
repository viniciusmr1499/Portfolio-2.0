import React from 'react';
import { FaGithub, FaGooglePlusG, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Anchor, Card } from './styles';


export default function MyCard() {
    return (
        <>
            <Card>
                <div className="banner">
                    <div className="profile"></div>
                    <h1>Marcos Vinícius</h1>
                    <h3>Desenvolvedor FullStack</h3>
                    <ul>
                        <li>
                            <Anchor link="https://www.instagram.com/vinicius_mr86/">
                                <FaInstagram size={22} color="#fff" />
                            </Anchor>
                        </li>
                        <li>
                            <Anchor link="">
                                <FaLinkedin size={22} color="#fff" />
                            </Anchor>
                        </li>
                        <li>
                            <Anchor link="https://github.com/viniciusmr1499">
                                <FaGithub size={22} color="#fff" />
                            </Anchor>
                        </li>
                        <li>
                            <Anchor link="">
                                <FaGooglePlusG size={22} color="#fff" />
                            </Anchor>
                        </li>
                    </ul>
                </div>
            </Card>
        </>
    );
}
