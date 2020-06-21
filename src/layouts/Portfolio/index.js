import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { FaBriefcase, FaSearch } from 'react-icons/fa';
import academy from './../../assets/images/academy/img9.jpg';
import academyTwo from './../../assets/images/academy/teste3.png';
import work from './../../assets/images/work/fortbrasil-mastercard.svg';
import workTwo from './../../assets/images/work/SGaeris.png';
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
            original: work,
            thumbnail: work
        },
        {
            original: workTwo,
            thumbnail: workTwo,
        }
    ];

    const fateneBarbearia = [
        {
            original: academy,
            thumbnail: academy
        }
    ];

    const fateneJ7 = [
        {
            original: academyTwo,
            thumbnail: academyTwo
        }
    ];

    const aeris = [
        workTwo,
    ];

    function hello() {
        alert('ola');
    }

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

                    <Modal
                        Card={<Card
                            img={work}
                            altImg="Fortbrasil Mastercard"
                            icon={<FaSearch size={24} color="#fff" />}
                            title="Página de adesão Mastercard"
                            subTitle="Fortbrasil"
                        />}
                        Slide={<Slide
                            images={fortbrasil}
                        />}
                    />

                    <Modal
                        Card={<Card
                            img={academy}
                            altImg="Sistema de Barbearia"
                            icon={<FaSearch size={24} color="#fff" />}
                            title="Sistema de Barbearia"
                            subTitle="Fatene"
                        />}
                        Slide={<Slide
                            images={fateneBarbearia}
                        />}
                    />

                    <Modal
                        Card={<Card
                            img={academyTwo}
                            altImg="J7 e-Shop"
                            icon={<FaSearch size={24} color="#fff" />}
                            title="E-commerce J7 Informática"
                            subTitle="Fatene"
                        />}
                        Slide={<Slide
                            images={fateneJ7}
                        />}
                    />

                    {/* <Card
                        img={academyTwo}
                        altImg="J7 e-Shop"
                        icon={<FaSearch size={24} color="#fff" />}
                        title="E-commerce J7 Informática"
                        subTitle="Fatene"
                    />

                    <Card
                        img={personal}
                        altImg="Meu portfólio"
                        icon={<FaSearch size={24} color="#fff" />}
                        title="Portfólio"
                        subTitle="Versão 1.0"
                    />

                    <Card
                        img={workTwo}
                        altImg="Sistema SGA"
                        icon={<FaSearch size={24} color="#fff" />}
                        title="SGA - Sistema Gestão Aeris"
                        subTitle="Sistema de Estoque"
                    />  */}

                </div>

            </Container>
        </>
    );
}
