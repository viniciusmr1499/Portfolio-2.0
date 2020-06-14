import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { Title, TopSection } from './styles';


export default function HeaderSection({ content, icon }) {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <>
            <TopSection data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="100"
                data-aos-offset="0">
                {icon}
            </TopSection>
            <Title data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                {content}
            </Title>
        </>
    );
}
