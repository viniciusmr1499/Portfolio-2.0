import React from 'react';
import { FaArrowUp, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiteFooter } from './styles';

export default function Footer() {
    let date = new Date();

    return (
        <>
            <SiteFooter>
                <a href="#" className="up">
                    <FaArrowUp color="#fff" />
                </a>

                <div className="c-list">
                    <ul className="list">
                        <li className="list__item">
                            <a href="https://www.instagram.com/vinicius_mr86/" className="list__link" target="_blank">
                                <FaInstagram size={20} color="#fff" />
                            </a>
                        </li>
                        <li className="list__item">
                            <a href="https://www.linkedin.com/in/marcos-vinicius-38a320187/" className="list__link" target="_blank">
                                <FaLinkedin size={20} color="#fff" />
                            </a>
                        </li>
                        <li className="list__item">
                            <a href="https://github.com/viniciusmr1499" className="list__link" target="_blank">
                                <FaGithub size={20} color="#fff" />
                            </a>
                        </li>
                        <li className="list__item">
                            <a href="https://twitter.com/Vinicius_1499" className="list__link" target="_blank">
                                <FaTwitter size={20} color="#fff" />
                            </a>
                        </li>
                    </ul>
                </div>
                <p className="copyright">
                    &copy; Direitos autorais {date.getFullYear()} <span>Marcos Vinícius</span>. Todos os direitos reservados.
                </p>
            </SiteFooter>
        </>
    );
}
