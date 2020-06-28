import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { PortfolioCard } from './styles';

export default function Card({ img, altImg, icon, title, subTitle }) {
    useEffect(() => {
        Aos.init({ dutation: 2000 });
    });

    return (
        <>
            <PortfolioCard data-aos="zoom-in-up">
                <img alt={altImg} src={img} />
                <figcaption>
                    {icon}
                    <h5 className="title">{title}</h5>
                    <span className="sub-title">{subTitle}</span>
                </figcaption>
            </PortfolioCard>
        </>
    );
}
