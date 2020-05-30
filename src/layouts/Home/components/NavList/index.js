import React from 'react';
import { List } from './styles.js';

export default function NavList() {
    return (
        <List>
            <li>
                <a className="nav-link" data-hover="Início" href="#home">
                    Início
                </a>
            </li>
            <li>
                <a className="nav-link" data-hover="Sobre" href="#about">
                    Sobre
                </a>
            </li>
            <li>
                <a className="nav-link" data-hover="Habilidades" href="#skills">
                    Habilidades
                </a>
            </li>
            <li>
                <a className="nav-link" data-hover="Resumo" href="#resume">
                    Resumo
                </a>
            </li>
            <li>
                <a className="nav-link" data-hover="Portfólio" href="#portfolio">
                    Portfólio
                </a>
            </li>
            <li>
                <a className="nav-link" data-hover="Contato" href="#contact">
                    Contato
                </a>
            </li>
        </List>
    );
}
