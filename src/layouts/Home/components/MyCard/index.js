import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaRocket, FaTwitter } from 'react-icons/fa';
import { Anchor, Card } from './styles';

export default function MyCard({ title, subTitle, avatar }) {
    return (
        <>
            <Card>
                <div className="banner">
                    <div className="wrapper">
                        <div className="circle-riple"></div>
                        <img src={avatar} className="profile" alt="Profile" />
                    </div>
                    <h1>{title}</h1>
                    <h3>
                        {subTitle}
                        <FaRocket size={24} color="#DEE19B" />
                    </h3>
                    <ul>
                        <li>
                            <Anchor link="https://www.instagram.com/vinicius_mr86/">
                                <FaInstagram size={22} color="#fff" />
                            </Anchor>
                        </li>
                        <li>
                            <Anchor link="https://www.linkedin.com/in/marcos-vinicius-38a320187/">
                                <FaLinkedin size={22} color="#fff" />
                            </Anchor>
                        </li>
                        <li>
                            <Anchor link="https://github.com/viniciusmr1499">
                                <FaGithub size={22} color="#fff" />
                            </Anchor>
                        </li>
                        <li>
                            <Anchor link="https://twitter.com/Vinicius_1499">
                                <FaTwitter size={22} color="#fff" />
                            </Anchor>
                        </li>
                    </ul>
                </div>
            </Card >
        </>
    );
}
