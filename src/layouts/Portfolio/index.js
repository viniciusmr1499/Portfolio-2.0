import React, { useEffect, useState } from 'react';
import { FaBriefcase, FaSearch } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

import HeaderSection from './../../reusable/HeaderSection';
import Card from './components/Card';
import Modal from './components/Modal';
import Slide from './components/Slide';
import { Container } from './styles';
import { modals } from './utils';

export default function Portfolio() {
    const [categories, setCategories] = useState(['all']);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Aos.init({ dutation: 2000 });
    },[]);

    useEffect(() => {
        if(categories == 'all'){
            setCards(modals);
        }else {
            setCards(modals.filter(card => card.id === categories));
        }

    }, [categories]);

    function changeCategories(id) {
        setCategories(id);
    }   

    return (
        <>
            <Container id="portfolio">
                <HeaderSection content="Portfólio" icon={<FaBriefcase size={34} color="#fff" />} />
                <div className="c-portfolio">
                    <div className="c-portfolio-list" data-aos="fade-up">
                        <a onClick={() => changeCategories('all')} className="c-portfolio__link c-portfolio__link--active">
                            Todas as categorias
                        </a>
                        <a onClick={() => changeCategories('work')} className="c-portfolio__link">
                            Trabalho
                        </a>
                        <a onClick={() => changeCategories('academy')} className="c-portfolio__link">
                            Acadêmico
                        </a>
                        <a onClick={() => changeCategories('personal')} className="c-portfolio__link">
                            Pessoal
                        </a>
                    </div>
                    
                    {cards.map(item => (<Modal 
                        Card={<Card
                            img={item.thumbnail}
                            altImg={item.altImg}
                            icon={<FaSearch size={24} color="#fff" />}
                            title={item.title}
                            subTitle={item.subTitle}
                        />}
                        Slide={<Slide images={item.figures}/>}
                    />))}
                </div>

            </Container>
        </>
    );
}
