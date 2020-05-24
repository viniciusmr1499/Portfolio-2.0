import React from 'react';
import { List } from './styles.js';

export default function NavList() {
    return (
        <List>
            <li>
                <a className="nav-link" href="#">
                    Início
                </a>
            </li>
            <li>
                <a className="nav-link" href="#">
                    Sobre
                </a>
            </li>
            <li>
                <a className="nav-link" href="#">
                    Habilidades
                </a>
            </li>
            <li>
                <a className="nav-link" href="#">
                    Resumo
                </a>
            </li>
            <li>
                <a className="nav-link" href="#">
                    Portfólio
                </a>
            </li>
            <li>
                <a className="nav-link" href="#">
                    Contato
                </a>
            </li>
        </List>
    );
}
