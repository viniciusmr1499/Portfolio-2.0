import React from 'react';
import { FaBook, FaCar, FaCoffee, FaDev, FaDownload, FaGamepad, FaLinux, FaMoneyBillAlt, FaMusic, FaTheaterMasks } from 'react-icons/fa';
import { AboutSection, ListDetails, ListMyInterests } from './styles';

export default function About() {

    return (
        <AboutSection>
            <div>
                <FaDev size={34} />
            </div>

            <h1>
                Sobre mim
            </h1>

            <p className="description">
                <span>Olá, eu me chamo Marcos Vinicius.</span> Você pode me ver do jeito que quiser,
                mas só eu posso te mostrar quem realmente sou. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Maecenas quis ornare purus. Morbi luctus tortor nunc, vitae posuere
                nibh malesuada sed. In nec tortor eu nibh
            </p>

            <h2 className="title__details">Detalhes Pessoais</h2>
            <ListDetails>
                <li>
                    <h4 className="detail__title">Data de <br /> Nascimento</h4>
                    <p className="response_details">
                        14-01-1999 (21 anos)
                        {/* Lembrar de pegar a idade através de um function */}
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
                    <FaCar size={30} />
                    <span>Carros</span>
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
