import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhoneAlt } from 'react-icons/fa';
import { Container, FormContact } from './styles';

export default function Contact() {
    useEffect(() => {
        Aos.init({ dutation: 2000 });
    });

    return (
        <>
            <Container>
                <FormContact data-aos="fade-up">
                    <input className="form__control" type="text" placeholder="Seu nome" />
                    <input className="form__control" type="tel" placeholder="Número de telefone" />
                    <input className="form__control" type="email" placeholder="Endereço de e-mail" />
                    <input className="form__control" type="text" placeholder="Assunto" />
                    <textarea className="form__control--textarea" placeholder="Mensagem" cols="30" rows="10"></textarea>
                    <button type="submit" className="btn-form">
                        Enviar Mensagem
                        <FaPaperPlane color="#fff" />
                    </button>
                </FormContact>

                

                <div className="c-location" data-aos="fade-up" >
                    <div className="c-location__google">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127394.95095174108!2d-38.58898776597533!3d-3.790097876334346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74c3f464c783f%3A0x4661c60a0c6b37ca!2sFortaleza%20-%20CE!5e0!3m2!1spt-BR!2sbr!4v1594498556191!5m2!1spt-BR!2sbr" width={600} height={450} frameborder={0} style={{border:0}} allowfullscreen={true} aria-hidden={false} tabindex={0}></iframe>
                        <div className="location-info">
                            <div className="google-info">
                                <ul className="list">
                                    <li className="list__item">
                                        <FaMapMarkerAlt size={22} /> Fortaleza, CE
                                    </li>
                                    <li className="list__item">
                                        <FaPhoneAlt size={22} /> Ligue: +55 9 8611-7155
                                    </li>
                                    <li className="list__item">
                                        <FaEnvelope size={22} /> E-mail: viniciusmr1499@gmail.com
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
