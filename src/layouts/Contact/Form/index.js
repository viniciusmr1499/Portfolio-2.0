import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhoneAlt } from 'react-icons/fa';
import { Container, FormContact } from './styles';

export default function Contact() {
    return (
        <>
            <Container>
                <FormContact>
                    <input className="form__control" type="text" placeholder="Seu nome" />
                    <input className="form__control" type="tel" placeholder="Número de telefone" />
                    <input className="form__control" type="email" placeholder="Endereço de e-mail" />
                    <input className="form__control" type="text" placeholder="Sujeito" />
                    <textarea className="form__control--textarea" placeholder="Mensagem" cols="30" rows="10"></textarea>
                    <button type="submit" className="btn-form">
                        Enviar Mensagem
                        <FaPaperPlane color="#fff" />
                    </button>
                </FormContact>

                <div className="c-location">
                    <div className="c-location__google">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609600091!2d72.7411019849437!3d19.082197841114034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1549273138294" width="100%" height="100%" frameborder="0" allowfullscreen=""></iframe>
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
