import React from 'react';
import { List } from './styles.js';

export default function NavList() {
    return (
        <List>
            <li>
                <a className="nav-link" data-hover="Início" href="#">
                    Início
                </a>
            </li>
            <li>
                <a className="nav-link" data-hover="Sobre" href="#about">
                    Sobre
                </a>
            </li>
            <li>
                <a className="nav-link" data-hover="Habilidades" href="#Habilidades">
                    Habilidades
                </a>
            </li>
            <li>
                <a className="nav-link" data-hover="Resumo" href="#Resumo">
                    Resumo
                </a>
            </li>
            <li>
                <a className="nav-link" data-hover="Portfólio" href="#Portfólio">
                    Portfólio
                </a>
            </li>
            <li>
                <a className="nav-link" data-hover="Contato" href="#Contato">
                    Contato
                </a>
            </li>
        </List>
    );
}
