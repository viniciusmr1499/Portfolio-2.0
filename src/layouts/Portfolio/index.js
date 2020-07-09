import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { FaBriefcase, FaSearch } from 'react-icons/fa';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// fortbrasil images
import imgFortbrasilCard from './../../assets/images/work/fortbrasil/fortbrasil-mastercard.svg';
import imgFortbrasilImg1 from './../../assets/images/work/fortbrasil/img1.png';
import imgFortbrasilImg2 from './../../assets/images/work/fortbrasil/img2.png';
import imgFortbrasilImg3 from './../../assets/images/work/fortbrasil/img3.png';
import imgFortbrasilImg4 from './../../assets/images/work/fortbrasil/img4.png';
import imgFortbrasilImg5 from './../../assets/images/work/fortbrasil/img5.png';
import imgFortbrasilImg6 from './../../assets/images/work/fortbrasil/img6.png';

// aeris images
import imgAerisCard from './../../assets/images/work/aeris/img.png';
import imgAerisImg1 from './../../assets/images/work/aeris/img1.png';
import imgAerisImg2 from './../../assets/images/work/aeris/img2.png';
import imgAerisImg3 from './../../assets/images/work/aeris/img3.png';

// fatene images of project one 
import imgJ7InformaticaCard from './../../assets/images/academy/j7-informatica/img8.png';
import imgJ7Informatica2 from './../../assets/images/academy/j7-informatica/img2.png';
import imgJ7Informatica3 from './../../assets/images/academy/j7-informatica/img3.png';
import imgJ7Informatica4 from './../../assets/images/academy/j7-informatica/img4.png';
import imgJ7Informatica5 from './../../assets/images/academy/j7-informatica/img5.png';
import imgJ7Informatica6 from './../../assets/images/academy/j7-informatica/img6.png';
import imgJ7Informatica7 from './../../assets/images/academy/j7-informatica/img7.png';

// fatene images of project two 
import imgSistemaBarberCard from './../../assets/images/academy/q-barber/img3.png';
import imgSistemaBarberImg1 from './../../assets/images/academy/q-barber/img1.png';
import imgSistemaBarberImg2 from './../../assets/images/academy/q-barber/img2.jpg';
import imgSistemaBarberImg3 from './../../assets/images/academy/q-barber/img5.png';
import imgSistemaBarberImg4 from './../../assets/images/academy/q-barber/img4.png';

// portfolio personal  
import imgPortfolioCard from './../../assets/images/personal/portfolio/img.png';
import imgPortfolioImg1 from './../../assets/images/personal/portfolio/img1.png';
import imgPortfolioImg2 from './../../assets/images/personal/portfolio/img2.png';
import imgPortfolioImg3 from './../../assets/images/personal/portfolio/img3.png';
import imgPortfolioImg4 from './../../assets/images/personal/portfolio/img4.png';

// Be The Hero rocketseat  
import imgBeTheHeroCard from './../../assets/images/personal/BeTheHero/img.jpeg';
import imgBeTheHeroImg1 from './../../assets/images/personal/BeTheHero/img1.jpeg';
import imgBeTheHeroImg2 from './../../assets/images/personal/BeTheHero/img2.jpeg';
import imgBeTheHeroImg3 from './../../assets/images/personal/BeTheHero/img3.jpeg';
import imgBeTheHeroImg4 from './../../assets/images/personal/BeTheHero/img4.jpeg';
import imgBeTheHeroImg5 from './../../assets/images/personal/BeTheHero/img5.jpeg';

import HeaderSection from './../../reusable/HeaderSection';
import Card from './components/Card';
import Modal from './components/Modal';
import Slide from './components/Slide';
import { Container } from './styles';

export default function Portfolio() {
    useEffect(() => {
        Aos.init({ dutation: 2000 });
    });

    const fortbrasil = [
        {
            original: imgFortbrasilImg1,
            thumbnail: imgFortbrasilImg1
        },
        {
            original: imgFortbrasilImg2,
            thumbnail: imgFortbrasilImg2,
        },
        {
            original: imgFortbrasilImg3,
            thumbnail: imgFortbrasilImg3
        },
        {
            original: imgFortbrasilImg4,
            thumbnail: imgFortbrasilImg4
        },
        {
            original: imgFortbrasilImg5,
            thumbnail: imgFortbrasilImg5
        },
        {
            original: imgFortbrasilImg6,
            thumbnail: imgFortbrasilImg6
        },
    ];

    const j7Informatica = [
        {
            original: imgJ7Informatica2,
            thumbnail: imgJ7Informatica2 
        },
        {
            original: imgJ7Informatica3,
            thumbnail: imgJ7Informatica3 
        }, 
        {
            original: imgJ7Informatica4,
            thumbnail: imgJ7Informatica4 
        }, 
        {
            original: imgJ7Informatica5,
            thumbnail: imgJ7Informatica5 
        }, 
        {
            original: imgJ7Informatica6,
            thumbnail: imgJ7Informatica6 
        }, 
        {
            original: imgJ7Informatica7,
            thumbnail: imgJ7Informatica7 
        }, 
    ]

    const sistemaBarbearia = [
        {
            original: imgSistemaBarberImg1,
            thumbnail: imgSistemaBarberImg1 
        },
        {
            original: imgSistemaBarberImg2,
            thumbnail: imgSistemaBarberImg2 
        },
        {
            original: imgSistemaBarberImg3,
            thumbnail: imgSistemaBarberImg3 
        },
        {
            original: imgSistemaBarberImg4,
            thumbnail: imgSistemaBarberImg4 
        }
    ];

    const portfolio = [
        {
            original: imgPortfolioImg1,
            thumbnail: imgPortfolioImg1 
        },
        {
            original: imgPortfolioImg2,
            thumbnail: imgPortfolioImg2 
        },
        {
            original: imgPortfolioImg3,
            thumbnail: imgPortfolioImg3 
        },
        {
            original: imgPortfolioImg4,
            thumbnail: imgPortfolioImg4 
        },
    ];

    const aeris = [
        {
            original: imgAerisImg1,
            thumbnail: imgAerisImg1 
        },
        {
            original: imgAerisImg2,
            thumbnail: imgAerisImg2 
        },
        {
            original: imgAerisImg3,
            thumbnail: imgAerisImg3 
        },
    ];

    const beTheHero = [
        {
            original: imgBeTheHeroImg1,
            thumbnail: imgBeTheHeroImg1 
        },
        {
            original: imgBeTheHeroImg2,
            thumbnail: imgBeTheHeroImg2 
        },
        {
            original: imgBeTheHeroImg3,
            thumbnail: imgBeTheHeroImg3 
        },
        {
            original: imgBeTheHeroImg4,
            thumbnail: imgBeTheHeroImg4 
        },
        {
            original: imgBeTheHeroImg5,
            thumbnail: imgBeTheHeroImg5 
        },
    ];

    return (
        <>
            <Container id="portfolio">
                <HeaderSection content="Portfólio" icon={<FaBriefcase size={34} color="#fff" />} />
                <div className="c-portfolio">
                    <div className="c-portfolio-list" data-aos="fade-up">
                        <a href="#" className="c-portfolio__link c-portfolio__link--active">
                            Todas as categorias
                        </a>
                        <a href="#" className="c-portfolio__link">
                            Trabalho
                        </a>
                        <a href="#" className="c-portfolio__link">
                            Acadêmico
                        </a>
                        <a href="#" className="c-portfolio__link">
                            Pessoal
                        </a>
                    </div>

                    <Modal
                        Card={<Card className="test"
                            img={imgFortbrasilCard}
                            altImg="Fortbrasil Mastercard"
                            icon={<FaSearch size={24} color="#fff" />}
                            title="Página de adesão Mastercard"
                            subTitle="Fortbrasil"
                        />}
                        Slide={<Slide images={fortbrasil}/>}
                    />
                                       
                    <Modal
                        Card={<Card
                            img={imgSistemaBarberCard}
                            altImg="Sistema de Barbearia"
                            icon={<FaSearch size={24} color="#fff" />}
                            title="Sistema de Barbearia"
                            subTitle="Fatene"
                        />}
                        Slide={<Slide images={sistemaBarbearia}/>}
                    />

                    <Modal
                        Card={<Card
                            img={imgBeTheHeroCard}
                            altImg="J7 e-Shop"
                            icon={<FaSearch size={24} color="#fff" />}
                            title="Be The Hero"
                            subTitle="Rocketseat"
                        />}
                        Slide={<Slide images={beTheHero}/>}
                    />

                    <Modal
                        Card={<Card
                        img={imgPortfolioCard}
                        altImg="Meu portfólio"
                        icon={<FaSearch size={24} color="#fff" />}
                        title="Portfólio"
                        subTitle="Versão 1.0"
                        />}
                        Slide={<Slide images={portfolio}/>}
                    />

                    <Modal
                        Card={<Card
                            img={imgAerisCard}
                            altImg="Sistema SGA"
                            icon={<FaSearch size={24} color="#fff" />}
                            title="SGA - Sistema Gestão Aeris"
                            subTitle="Sistema de Estoque"
                        />}
                        Slide={<Slide images={aeris}/>}
                    />

                    <Modal
                        Card={<Card
                            img={imgJ7InformaticaCard}
                            altImg="J7 e-Shop"
                            icon={<FaSearch size={24} color="#fff" />}
                            title="E-commerce J7 Informática"
                            subTitle="Fatene"
                        />}
                        Slide={<Slide images={j7Informatica}/>}
                    />
                </div>

            </Container>
        </>
    );
}
