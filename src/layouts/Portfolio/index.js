import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { FaBriefcase, FaSearch } from 'react-icons/fa';
import academy from './../../assets/images/academy/img9.jpg';
import academyTwo from './../../assets/images/academy/teste3.png';
import personal from './../../assets/images/personal/img.png';
import work from './../../assets/images/work/fortbrasil-mastercard.svg';
import workTwo from './../../assets/images/work/SGaeris.png';
import HeaderSection from './../../reusable/HeaderSection';
import { Container, PortfolioCard } from './styles';

export default function Portfolio() {
    useEffect(() => {
        Aos.init({ dutation: 2000 });
    });

    return (
        <>
            <Container id="portfolio">
                <HeaderSection content="Portfólio" icon={<FaBriefcase size={34} color="#fff" />} />
                <div className="c-portfolio">
                    <div className="c-portfolio-list" data-aos="fade-up">
                        <a href="#res" className="c-portfolio__link c-portfolio__link--active">
                            Todas as categorias
                        </a>
                        <a href="#res" className="c-portfolio__link">
                            Trabalho
                        </a>
                        <a href="#res" className="c-portfolio__link">
                            Acadêmico
                        </a>
                        <a href="#res" className="c-portfolio__link">
                            Pessoal
                        </a>
                    </div>

                    <PortfolioCard data-aos="zoom-in-up">
                        <img alt="" src={work} />
                        <figcaption>
                            <FaSearch color="#fff" size={24} />
                            <h5 className="title">Página de adesão Mastercard</h5>
                            <span className="sub-title">Fortbrasil</span>
                            <a href="#"></a>
                        </figcaption>
                    </PortfolioCard>

                    <PortfolioCard data-aos="zoom-in-up">
                        <img alt="" src={academy} />
                        <figcaption>
                            <FaSearch color="#fff" size={24} />
                            <h5 className="title">Sistema de Barbearia</h5>
                            <span className="sub-title">Fatene</span>
                            <a href="#"></a>
                        </figcaption>
                    </PortfolioCard>

                    <PortfolioCard data-aos="zoom-in-up">
                        <img alt="" src={academyTwo} />
                        <figcaption>
                            <FaSearch color="#fff" size={24} />
                            <h5 className="title">E-commerce J7 e-Shop</h5>
                            <span className="sub-title">Fatene</span>
                            <a href="#"></a>
                        </figcaption>
                    </PortfolioCard>

                    <PortfolioCard data-aos="zoom-in-up">
                        <img alt="" src={personal} />
                        <figcaption>
                            <FaSearch color="#fff" size={24} />
                            <h5 className="title">Portfólio</h5>
                            <span className="sub-title">Versão 1.0</span>
                            <a href="#"></a>
                        </figcaption>
                    </PortfolioCard>

                    <PortfolioCard data-aos="zoom-in-up">
                        <img alt="" src={workTwo} />
                        <figcaption>
                            <FaSearch color="#fff" size={24} />
                            <h5 className="title">SGA - Sistema Gestão Aeris</h5>
                            <span className="sub-title">Sistema de Estoque</span>
                            <a href="#"></a>
                        </figcaption>
                    </PortfolioCard>

                </div>

            </Container>
        </>
    );
}
