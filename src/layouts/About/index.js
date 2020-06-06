import React from 'react';
import { FaBook, FaCoffee, FaDev, FaDownload, FaGamepad, FaJs, FaLinux, FaMoneyBillAlt, FaMusic, FaTheaterMasks } from 'react-icons/fa';
import HeaderSection from './../../reusable/HeaderSection';
import { AboutSection, ListDetails, ListMyInterests } from './styles';

export default function About() {
    return (
        <AboutSection id="about">
            <HeaderSection content="Sobre mim" icon={<FaDev size={34} />} />

            <p className="description">
                <span>Olá, eu me chamo Marcos Vinicius.</span> Sou um entusiasta da tecnologia,
                busco sempre conhecimento através de cursos, artigos, livros e vídeos.
                Meu Objetivo é está inserido em projetos de grande porte, poder colaborar com toda a equipe
                de desenvolvimento, compartilhar conhecimento, acertar, errar, adquirir experiência e principalmente
                impactar positivamente na vida das pessoas. Sou uma pessoa responsável, companheiro, simpático,
                sou bem flexível, gosto de ir ao cinema, praia, viajar e conhecer pessoas novas.
                Meus principais valores são, ética, foco no resultado, família e perenidade.
            </p>

            <h2 className="title__details">Detalhes Pessoais</h2>
            <ListDetails>
                <li>
                    <h4 className="detail__title">Data de <br /> Nascimento</h4>
                    <p className="response_details">
                        14-01-1999 (21 anos)
                    </p>
                </li>
                <li>
                    <h4 className="detail__title">Telefone</h4>
                    <p className="response_details">
                        +55 9 8611-7155
                    </p>
                </li>
                <li>
                    <h4 className="detail__title">E-mail</h4>
                    <p className="response_details">
                        viniciusmr1499@gmail.com
                    </p>
                </li>
                <li>
                    <h4 className="detail__title">Endereço</h4>
                    <p className="response_details">
                        Fortaleza, CE
                    </p>
                </li>
                <li>
                    <h4 className="detail__title">Trabalho</h4>
                    <p className="response_details dev">
                        Developer Software
                    </p>
                </li>

            </ListDetails>

            <h2 className="title__myInterests">Meus interesses</h2>
            <ListMyInterests>
                <li className="interests__item">
                    <FaGamepad size={30} />
                    <span>Jogos</span>
                </li>
                <li className="interests__item">
                    <FaMusic size={30} />
                    <span>Música</span>
                </li>
                <li className="interests__item">
                    <FaLinux size={30} />
                    <span>Linux</span>
                </li>
                <li className="interests__item">
                    <FaBook size={30} />
                    <span>Livros</span>
                </li>
                <li className="interests__item">
                    <FaTheaterMasks size={30} />
                    <span>Cinema</span>
                </li>
                <li className="interests__item">
                    <FaCoffee size={30} />
                    <span>Café</span>
                </li>
                <li className="interests__item">
                    <FaJs size={30} />
                    <span>JS</span>
                </li>
                <li className="interests__item">
                    <FaMoneyBillAlt size={30} />
                    <span>Dinheiro</span>
                </li>
            </ListMyInterests>

            <div className="curriculum">
                <a href="#" className="cv">
                    Baixar CV
                    <FaDownload size={16} />
                </a>
            </div>

        </AboutSection>
    );
}
