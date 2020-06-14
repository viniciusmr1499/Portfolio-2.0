import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { FaCheck, FaHardHat, FaUserCheck, FaUserGraduate } from 'react-icons/fa';
import HeaderSection from '../../reusable/HeaderSection';
import { Container, Education, WorkExperience } from './styles';

export default function Resume() {
    useEffect(() => {
        Aos.init({
            duration: 2000,
        })
    }, []);


    return (
        <>
            <Container id="resume">
                <HeaderSection content="Meu Resumo" icon={<FaUserGraduate size={34} color="#fff" />} />

                <Education>
                    <h2 className="c-resume__title">Educação</h2>
                    <div className="wrapper">
                        <div className="c-card-education" data-aos="fade-up" >
                            <div className="c-education">
                                <h3 className="c-education__title">
                                    Análise <span style={{ textTransform: 'lowercase' }}>e</span> Desenvolvimento de sistemas
                                    <span className="c-education__subTitle"> Faculdade Tecnológica do nordeste</span>
                                </h3>
                                <span className="c-education__time">2017-2020</span>
                                <p className="c-education__description">
                                    O curso superior de Tecnologia em Análise e Desenvolvimento de Sistemas tem como foco a criação,
                                    o desenvolvimento, a análise, a projeção e a implementação de sistemas de informação.
                                    Um analista e desenvolvedor de sistemas é o elo indispensável entre as necessidades do mundo
                                    dos negócios e os crescentes recursos da tecnologia da informação.
                                </p>
                            </div>
                        </div>

                        <div className="c-card-education" data-aos="fade-up" >
                            <div className="c-education">
                                <h3 className="c-education__title">
                                    JavaScript<br />
                                    <span className="c-education__subTitle"> School Of Net</span>
                                </h3>
                                <span className="c-education__time">2019-2019</span>
                                <p className="c-education__description">
                                    <FaCheck /> Criar os primeiros scripts com JavaScript <br />
                                    <FaCheck /> Variáveis e Operadores, Arrays, Loop e Estilos <br />
                                    <FaCheck /> Eventos, Formulários e criação de elementos <br />
                                    <FaCheck /> Remoção, Delegação e Animação <br />
                                    <FaCheck /> Paradigmas de programação <br />
                                    <FaCheck /> Manipulando Árvore DOM <br />
                                    <FaCheck /> Funções e Arrow functions
                                </p>
                            </div>
                        </div>

                        <div className="c-card-education" data-aos="fade-up" >
                            <div className="c-education">
                                <h3 className="c-education__title">
                                    PHP - MVC <br />
                                    <span className="c-education__subTitle"> School Of Net</span>
                                </h3>
                                <span className="c-education__time">2019-2019</span>
                                <p className="c-education__description">
                                    <FaCheck /> Programação Orientada a Objetos <br />
                                    <FaCheck /> Arquitetura MVC <br />
                                    <FaCheck /> Roteamento inteligente <br />
                                    <FaCheck /> Autoload de Classes <br />
                                    <FaCheck /> PSR-4 <br />
                                    <FaCheck /> Composer - gerenciador de dependências <br />
                                    <FaCheck /> Boas práticas <br />
                                    <FaCheck /> Projeto Prático <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </Education>

                <WorkExperience>
                    <h2 className="c-resume__title">Experiência de trabalho</h2>
                    <div className="wrapper">
                        <div className="c-card-work" data-aos="fade-up" >
                            <div className="c-work">
                                <h3 className="c-work__title">
                                    FortBrasil - Instituição financeira
                                    <span className="c-work__subTitle"> Desenvolvedor FullStack JR</span>
                                </h3>
                                <span className="c-work__time">2020 - Atual</span>
                                <p className="c-work__description">
                                    <strong>Atribuições:</strong> <br />
                                    <FaCheck /> Desenvolver front de aplicações <br />
                                    <FaCheck /> Web Design Responsivo <br />
                                    <FaCheck /> Manutenibilidade em Aplicações <br />
                                    <FaCheck /> Elaboração de scripts, visando automatizar processos <br />
                                    <FaCheck /> Integrar frontEnd com back da aplicação <br />
                                    <FaCheck /> Instruções SQL, Backups e relatórios <br />
                                </p>
                            </div>
                        </div>

                        <div className="c-card-work" data-aos="fade-up" >
                            <div className="c-work">
                                <h3 className="c-work__title">
                                    Aeris Energy <br />
                                    <span className="c-work__subTitle"> Suporte Técnico - Infraestrutura</span>
                                </h3>
                                <span className="c-work__time">2019 - 2020</span>
                                <p className="c-work__description">
                                    <strong>Atribuições:</strong><br />
                                    <FaHardHat /> Administração da rede de computadores <br />
                                    <FaHardHat /> Administração de usuários <br />
                                    <FaHardHat /> Suporte a Hardware e Software <br />
                                    <FaHardHat /> Suporte a impressoras <br />
                                    <FaHardHat /> Configurações <br />
                                    <FaHardHat /> Reparos <br />
                                </p>
                            </div>
                        </div>

                        <div className="c-card-work" data-aos="fade-up" >
                            <div className="c-work">
                                <h3 className="c-work__title">
                                    Leão Matos Advogados Associados <br />
                                    <span className="c-work__subTitle"> Auxiliar Administrativo</span>
                                </h3>
                                <span className="c-work__time">2017 - 2019</span>
                                <p className="c-work__description">
                                    <strong>Atribuições:</strong><br />
                                    <FaUserCheck /> Alimentar planilhas e gerar relatórios<br />
                                    <FaUserCheck /> Envio mássivo de sms e e-mail clientes (inadimplentes)<br />
                                    <FaUserCheck /> Prestar suporte a operação de cobrança (Call center)<br />
                                    <FaUserCheck /> Gerenciar processo de devolução amigável de veículos<br />
                                    <FaUserCheck /> Assessorar gestores com questões práticas de trabalho<br />
                                    <FaUserCheck /> Responder e-mails<br />
                                    <FaUserCheck /> Realizar atendimento aos clientes quando solicitado<br />
                                </p>
                            </div>
                        </div>

                    </div>
                </WorkExperience>

            </Container>
        </>
    );
}
