import styled from 'styled-components';

export const Container = styled.section`
    position: relative;
    padding: 3rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 80%;
    margin: 0 auto;
    grid-column-gap: 1.85rem;
    justify-items: center;

    h2.c-resume__title {
        grid-column: 1 / 3;
        text-transform: capitalize;
        margin-bottom: 1.3rem;
        font-family: 'Righteous', cursive;
        color: #FFF;
        font-size: 28px;
        line-height: 30px;
        position: relative;
        letter-spacing: 0.5px;
        font-weight: 400;
        text-align: center;
    }

    /* @media screen and (max-width: 1200px) and (max-width: 1350px) {
        width: 100%;
    } */

    @media screen and (max-width: 992px) {
        max-width: 80%;
    }

    /* laptop */
    @media screen and (min-width: 769px) and (max-width: 1024px) {
        h2.c-resume__title {
            font-size: 24px;
            line-height: 26px;
            margin-bottom: 15px;
        }
    }

    /* mobile  */
    @media screen and (max-width: 768px) {
        max-width: 90%;
        grid-template-columns: 1fr;
        margin: 0 auto;

        h2.c-resume__title {
            font-size: 24px;
            line-height: 26px;
            margin-bottom: 15px;
        }
    }

`;

export const Education = styled.div`
    position: relative;

    .wrapper {
        position: relative;
        border-right: 1px solid #333;
        height: max-content;

        .c-card-education {
            position: relative;
            width: 100%;
            font-family:"Work Sans", sans-serif;
            padding-right: 35px;
            margin-bottom: 2rem;

            .c-education {
                position: relative;
                width: 522px;
                padding: 25px;
                background: #252A2E;
                box-shadow: 0px 18px 18px 0 rgba(0, 0, 0, 0.2);
                border-right: 2px solid #1CB698;

                &:before {
                    content: '';
                    display: inline-block;
                    position: absolute;
                    background-color: #1CB698;
                    border-radius: 10px;
                    width: 12px;
                    height: 12px;
                    top: 50%;
                    right: -43px;
                    border: 2px solid #1CB698;
                    z-index: 2;
                    transform: translateY(-45%);
                }

                &:after {
                    content: '';
                    display: inline-block;
                    position: absolute;
                    background-color: #1CB698;
                    border-radius: 10px;
                    width: 36px;
                    height: 2px;
                    top: 50%;
                    right: -37px;
                    z-index: 1;
                }

                h3.c-education__title {
                    font-size: 22px;
                    letter-spacing: 0px;
                    line-height: 27px;
                    color: #FFF;
                    font-weight: 600;
                    margin-bottom: 10px;
                    text-transform: capitalize;

                    .c-education__subTitle {
                        color: #1CB698;
                        font-style: italic;
                    }
                }

                .c-education__time {
                    color: #1CB698;
                    margin-bottom: 1rem;
                    font-weight: 600;
                }

                .c-education__description {
                    margin-top: 1rem;
                    font-size: 16px;
                    letter-spacing: 0.5px;
                    line-height: 24px;
                    color: rgb(255, 255, 255);

                    svg {
                        transform: translateY(12%);
                    }
                }
            }
        }
    }

    /* laptop */
    @media screen and (min-width: 769px) and (max-width: 1200px) {

        .wrapper {
            width: 100%;
        }

        .wrapper .c-card-education {
            width: 100%;
            height: 100%;

            .c-education {
                width: 100%;

                h3.c-education__title {
                    font-size: 18px;
                    line-height: 20px;
                }
            }
        }
    }

    /* mobile  and tablet */
    @media screen and (max-width: 992px) {
        grid-column: 1/3;

        .wrapper .c-card-education .c-education h3.c-education__title {
            font-size: 18px;
            line-height: 20px;
        }
       .wrapper {
            width: 100%;

            .c-card-education {
                width: 100%;

                .c-education {
                    width: 100%;
                }
            }
        }
    }

    /* mobile  and tablet */
    @media screen and (max-width: 768px) {
        grid-column: 1/3;

        .wrapper .c-card-education .c-education h3.c-education__title {
            font-size: 18px;
            line-height: 20px;
        }

        .wrapper {
            width: 100%;

            .c-card-education {
                width: 100%;
                padding-right: 30px;

                .c-education {
                    width: 100%;
                }
            }
        }

        .wrapper .c-card-education .c-education:before {
            width: 10px;
            height: 10px;
            right: -39px;
        }

        .wrapper .c-card-education .c-education:after {
            width: 30px;
            height: 2px;
            right: -30px;
        }
    }

`;

export const WorkExperience = styled.div`
    position: relative;

    .wrapper {
        position: relative;
        border-left: 1px solid #333;
        height: max-content;

        .c-card-work {
            position: relative;
            width: 100%;
            height: max-content;
            font-family:"Work Sans", sans-serif;
            padding-left: 35px;
            margin-bottom: 2rem;

            .c-work {
                position: relative;
                width: 500px;
                height: max-content;
                padding: 25px;
                background: #252A2E;
                box-shadow: 0px 18px 18px 0 rgba(0, 0, 0, 0.2);
                border-left: 2px solid #1CB698;

                &:before {
                    content: '';
                    display: inline-block;
                    position: absolute;
                    background-color: #1CB698;
                    border-radius: 10px;
                    width: 12px;
                    height: 12px;
                    top: 50%;
                    left: -43px;
                    border: 2px solid #1CB698;
                    z-index: 2;
                    transform: translateY(-45%);
                }

                &:after {
                    content: '';
                    display: inline-block;
                    position: absolute;
                    background-color: #1CB698;
                    border-radius: 10px;
                    width: 36px;
                    height: 2px;
                    top: 50%;
                    left: -37px;
                    z-index: 1;
                }

                h3.c-work__title {
                    font-size: 22px;
                    letter-spacing: 0px;
                    line-height: 27px;
                    color: #1CB698;
                    font-weight: 600;
                    margin-bottom: 10px;
                    text-transform: capitalize;

                    .c-work__subTitle {
                        color: #FFF;
                        font-style: italic;
                    }
                }

                .c-work__time {
                    color: #1CB698;
                    margin-bottom: 1rem;
                    font-weight: 600;
                }

                .c-work__description {
                    margin-top: 1rem;
                    font-size: 1rem;
                    letter-spacing: 0.5px;
                    line-height: 24px;
                    color: rgb(255, 255, 255);

                    svg {
                        transform: translateY(12%);
                    }
                }
            }
        }
    }

    /* @media screen and (max-width: 900px) {
        .wrapper .c-card-work .c-work {
            height: max-content;
        }
    } */

    /* laptop */
    @media screen and (min-width: 992px) and (max-width: 1200px) {
        .wrapper {
            width: 100%;
        }

        .wrapper .c-card-work {
            width: 100%;


            .c-work {
                width: 100%;
                height: max-content;

                h3.c-work__title {
                    font-size: 18px;
                    line-height: 20px;
                }
            }
        }
    }

    /* mobile  and tablet */
    @media screen and (max-width: 992px) {
        grid-column: 1/3;

        .wrapper .c-card-work .c-work h3.c-work__title {
            font-size: 18px;
            line-height: 20px;
        }
       .wrapper {
            width: 100%;

            .c-card-work {
                width: 100%;

                .c-work {
                    width: 100%;
                }
            }
        }

        .wrapper .c-card-work .c-work:before {
            width: 12px;
            height: 12px;
            left: -45px;
        }

        .wrapper .c-card-work .c-work:after {
            width: 30px;
            height: 2px;
            left: -30px;
        }
    }
`;
