import React from 'react';
import { FaBriefcase, FaSearch } from 'react-icons/fa';
import image from './../../assets/Profile.jpg';
import HeaderSection from './../../reusable/HeaderSection';
import { Container, PortfolioCard } from './styles';


export default function Portfolio() {
    return (
        <>
            <Container id="portfolio">
                <HeaderSection content="Portfólio" icon={<FaBriefcase size={34} color="#fff" />} />
                <div className="c-portfolio">
                    <div className="c-portfolio-list">
                        <a href="#" className="c-portfolio__link c-portfolio__link--active">
                            Todas as categorias
                        </a>
                        <a href="#" className="c-portfolio__link">
                            Trabalho
                        </a>
                        <a href="#" className="c-portfolio__link">
                            Acadêmico
                        </a>
                    </div>

                    <PortfolioCard>
                        <img alt="" width="100" src={image} />
                        <figcaption>
                            <FaSearch color="#fff" size={24} />
                            <h5 className="title">Página de adesão Mastercard</h5>
                            <span class="sub-title">Fortbrasil</span>
                            <a href="#"></a>
                        </figcaption>
                    </PortfolioCard>

                    <PortfolioCard>
                        <img alt="" width="100" src={image} />
                        <figcaption>
                            <FaSearch color="#fff" size={24} />
                            <h5 className="title">Title</h5>
                            <span class="sub-title">subtitle</span>
                            <a href="#"></a>
                        </figcaption>
                    </PortfolioCard>

                    <PortfolioCard>
                        <img alt="" width="100" src={image} />
                        <figcaption>
                            <FaSearch color="#fff" size={24} />
                            <h5 className="title">Title</h5>
                            <span class="sub-title">subtitle</span>
                            <a href="#"></a>
                        </figcaption>
                    </PortfolioCard>

                </div>

            </Container>
        </>
    );
}
