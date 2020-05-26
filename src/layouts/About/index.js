import React from 'react';
import { FaBook, FaCar, FaCoffee, FaDev, FaGamepad, FaMoneyBillAlt, FaMusic, FaTrain, FaTruckMoving } from 'react-icons/fa';
import { AboutSection } from './styles';

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
            <h2>Detalhes Pessoais</h2>
            <ul>
                <li>
                    <p className="detail__title">Data de <br /> Nascimento</p>
                    <p className="response_details">
                        14-01-1999
                    </p>
                </li>
                <li>
                    <p className="detail__title">Telefone</p>
                    <p className="response_details">
                        +55 9 8611-7155
                    </p>
                </li>
                <li>
                    <p className="detail__title">E-mail</p>
                    <p className="response_details">
                        viniciusmr1499@gmail.com
                    </p>
                </li>
                <li>
                    <p className="detail__title">Endereço</p>
                    <p className="response_details">
                        Fortaleza, CE
                    </p>
                </li>
                <li>
                    <p className="detail__title">Trabalho</p>
                    <p className="response_details">
                        Developer Software
                    </p>
                </li>
            </ul>
            <ul className="my_interests">
                <li className="interests__item">
                    <FaGamepad />
                </li>
                <li className="interests__item">
                    <FaMusic />
                </li>
                <li className="interests__item">
                    <FaTrain />
                </li>
                <li className="interests__item">
                    <FaBook />
                </li>
                <li className="interests__item">
                    <FaTruckMoving />
                </li>
                <li className="interests__item">
                    <FaCoffee />
                </li>
                <li className="interests__item">
                    <FaCar />
                </li>
                <li className="interests__item">
                    <FaMoneyBillAlt />
                </li>
            </ul>
            <a href="" className="cv">Baixar CV</a>
        </AboutSection>
    );
}
