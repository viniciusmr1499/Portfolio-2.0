import React from 'react';
import { FaGithub, FaGooglePlusG, FaInstagram, FaLinkedin, FaRocket } from 'react-icons/fa';
import { Anchor, Card } from './styles';

export default function MyCard({ title, subTitle, avatar }) {
    return (
        <>
            <Card>
                <div className="banner">
                    <div className="circle-riple"></div>
                    <img src={avatar} className="profile" alt="Profile" />
                    <h1>{title}</h1>
                    <h3>
                        {subTitle}
                        <FaRocket size={24} color="#41c2fb" />
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
                            <Anchor link="https://mail.google.com/mail/u/0/#inbox">
                                <FaGooglePlusG size={22} color="#fff" />
                            </Anchor>
                        </li>
                    </ul>
                </div>
            </Card >
        </>
    );
}
