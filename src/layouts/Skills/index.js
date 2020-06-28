import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import HeaderSection from '../../reusable/HeaderSection';
import { Container, GroupSkills, HandleProgress, ProfessionalSkills, ProgressBar } from './styles';

export default function Skils() {
    const percentage = {
        javascript: 75,
        htmlCss: 90,
        reactJs: 62,
        php: 70,
        bootstrap: 80,
        git: 85,
        less: 65,
        communication: 85,
        teamwork: 90,
        creativity: 70,
        dedication: 95,
        tag: 90,
        proactivity: 85,
        competitiveness: 92
    };

    const {
        javascript,
        htmlCss,
        php,
        reactJs,
        git,
        bootstrap,
        less,
        communication,
        teamwork,
        creativity,
        dedication,
        tag,
        proactivity,
        competitiveness

    } = percentage;

    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    }, []);

    return (
        <Container id="skills">
            <HeaderSection content="Habilidades" icon={<FaStar size={34} />} />

            <div className="c-skills__wrapper">
                <GroupSkills data-aos="fade-up">
                    <h2>Habilidades Técnicas</h2>

                    <ul className="c-listSkills">
                        <li className="c-listSkills__item">
                            JavaScript

                            <ProgressBar>
                                <HandleProgress percentage={javascript} className="progress__percentage">
                                    <span className="percentage"></span>
                                </HandleProgress>
                            </ProgressBar>
                        </li>

                        <li className="c-listSkills__item">
                            Html e CSS

                            <ProgressBar>
                                <HandleProgress percentage={htmlCss} className="progress__percentage">
                                    <span className="percentage"></span>
                                </HandleProgress>
                            </ProgressBar>
                        </li>

                        <li className="c-listSkills__item">
                            PHP

                            <ProgressBar>
                                <HandleProgress percentage={php} className="progress__percentage">
                                    <span className="percentage"></span>
                                </HandleProgress>
                            </ProgressBar>
                        </li>

                        <li className="c-listSkills__item">
                            react JS

                            <ProgressBar>
                                <HandleProgress percentage={reactJs} className="progress__percentage">
                                    <span className="percentage"></span>
                                </HandleProgress>
                            </ProgressBar>
                        </li>

                        <li className="c-listSkills__item">
                            bootStrap

                            <ProgressBar>
                                <HandleProgress percentage={bootstrap} className="progress__percentage">
                                    <span className="percentage"></span>
                                </HandleProgress>
                            </ProgressBar>
                        </li>

                        <li className="c-listSkills__item">
                            git e gitflow

                            <ProgressBar>
                                <HandleProgress percentage={git} className="progress__percentage">
                                    <span className="percentage"></span>
                                </HandleProgress>
                            </ProgressBar>
                        </li>

                        <li className="c-listSkills__item">
                            Less

                            <ProgressBar>
                                <HandleProgress percentage={less} className="progress__percentage">
                                    <span className="percentage"></span>
                                </HandleProgress>
                            </ProgressBar>
                        </li>
                    </ul>
                </GroupSkills>

                <ProfessionalSkills data-aos="fade-up">
                    <h2>Habilidades Profissionais</h2>

                    <ul className="c-listSkillsProfessional">
                        <li className="c-listSkillsProfessional__item">
                            Comunicação

                            <ProgressBar>
                                <HandleProgress percentage={communication} className="progress__percentage">
                                    <span className="percentage"></span>
                                </HandleProgress>
                            </ProgressBar>
                        </li>

                        <li className="c-listSkillsProfessional__item">
                            Trabalho em equipe

                            <ProgressBar>
                                <HandleProgress percentage={teamwork} className="progress__percentage">
                                    <span className="percentage"></span>
                                </HandleProgress>
                            </ProgressBar>
                        </li>

                        <li className="c-listSkillsProfessional__item">
                            Criatividade

                            <ProgressBar>
                                <HandleProgress percentage={creativity} className="progress__percentage">
                                    <span className="percentage"></span>
                                </HandleProgress>
                            </ProgressBar>
                        </li>

                        <li className="c-listSkillsProfessional__item">
                            Dedicação

                            <ProgressBar>
                                <HandleProgress percentage={dedication} className="progress__percentage">
                                    <span className="percentage"></span>
                                </HandleProgress>
                            </ProgressBar>
                        </li>

                        <li className="c-listSkillsProfessional__item">
                            Etiqueta

                            <ProgressBar>
                                <HandleProgress percentage={tag} className="progress__percentage">
                                    <span className="percentage"></span>
                                </HandleProgress>
                            </ProgressBar>
                        </li>

                        <li className="c-listSkillsProfessional__item">
                            Proatividade

                            <ProgressBar>
                                <HandleProgress percentage={proactivity} className="progress__percentage">
                                    <span className="percentage"></span>
                                </HandleProgress>
                            </ProgressBar>
                        </li>

                        <li className="c-listSkillsProfessional__item">
                            Competitividade

                            <ProgressBar>
                                <HandleProgress percentage={competitiveness} className="progress__percentage">
                                    <span className="percentage"></span>
                                </HandleProgress>
                            </ProgressBar>
                        </li>
                    </ul>
                </ProfessionalSkills>
            </div>

        </Container>
    );
}
