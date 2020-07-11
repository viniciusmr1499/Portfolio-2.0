import styled from 'styled-components';

export const Container = styled.section`
    position: relative;
    background-color: #252A2E;
    width: 100%;
    padding: 3rem 0;
    display:grid;
    grid-template-columns: repeat(2, 1fr);

    .c-portfolio {
        grid-column: 1/3;
        position: relative;
        display: grid;
        width: 80%;
        margin: 0 auto;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 1.7rem;
    }

    .c-portfolio-list {
        grid-column: 1/4;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 3rem;

        .c-portfolio__link:hover:before, .c-portfolio__link:focus:before, .c-portfolio__link:active:before {
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
            -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
            transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
        }

        .c-portfolio__link {
            font-size: 16px;
            font-family: "Work Sans", sans-serif;
            color: #FFF;
            letter-spacing: 0.5px;
            font-weight: 500;
            background-color: transparent;
            display: inline-block;
            border-radius: 0px;
            vertical-align: middle;
            padding: 10px 22px;
            -webkit-transform: perspective(1px) translateZ(0);
            transform: perspective(1px) translateZ(0);
            position: relative;
            -webkit-transition-property: color;
            transition-property: color;
            -webkit-transition-duration: 0.5s;
            transition-duration: 0.5s;
            border: 1px solid #FFF;
            margin:0 .5rem;
            text-transform: capitalize;

            &:hover {
                cursor: pointer;
            }

            &:before {
                content: "";
                position: absolute;
                z-index: -1;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: #1CB698;
                -webkit-transform: scaleX(0);
                transform: scaleX(0);
                -webkit-transform-origin: 0 50%;
                transform-origin: 0 50%;
                -webkit-transition-property: transform;
                transition-property: transform;
                -webkit-transition-duration: 0.5s;
                transition-duration: 0.5s;
                border-radius: 0px;
                -webkit-transition-timing-function: ease-out;
                transition-timing-function: ease-out;
            }
        }

        .c-portfolio__link--active {
            background: #1CB698;
            border: 0;
        }
    }

    /* notbook and desktop  */
    @media screen and (min-width: 1024px) and (max-width: 1300px){
        grid-template-columns: 1fr;

        .c-portfolio {
            width: 80%;
            grid-template-columns: repeat(3,1fr);
            grid-gap: 1rem 1.5rem;

            .c-portfolio-list {
                grid-column: 1/4;
                flex-flow: row wrap;

                .c-portfolio__link {
                    margin-bottom: .88rem;

                    &:first-child {
                        order: -1;
                    }

                    &:nth-child(2){
                        order: 2;
                    }
                }
            }
        }
    }

    /* laptop  */
    @media screen and (min-width: 769px) and (max-width: 1024px) {
        grid-template-columns: 1fr;

        .c-portfolio {
            width: 80%;
            grid-template-columns: repeat(2,1fr);
            grid-gap: 1rem 1.5rem;

            .c-portfolio-list {
                grid-column: 1/3;
                flex-flow: row wrap;

                .c-portfolio__link {
                    margin-bottom: .88rem;

                    &:first-child {
                        order: -1;
                    }

                    &:nth-child(2){
                        order: 2;
                    }
                }
            }
        }
    }

    /* tablet  */
    @media screen and (min-width: 577px) and (max-width: 768px){
        grid-template-columns: 1fr;

        .c-portfolio {
            width: 90%;
            grid-template-columns: repeat(2,1fr);
            grid-gap: 1rem 1.5rem;

            .c-portfolio-list {
                grid-column: 1/3;
                flex-flow: row wrap;

                .c-portfolio__link {
                    margin-bottom: .88rem;

                    &:first-child {
                        order: -1;
                    }

                    &:nth-child(2){
                        order: 2;
                    }
                }
            }
        }
    }

    /* mobile */
    @media screen and (max-width:576px) {
        grid-template-columns: 1fr;

        .c-portfolio {
            width: 90%;
            grid-gap: 0rem;
            grid-template-columns: 1fr;

            .c-portfolio-list {
                grid-column: 1;
                flex-flow: column wrap;

                .c-portfolio__link {
                    margin-bottom: .88rem;

                    &:first-child {
                        order: -1;
                    }

                    &:nth-child(2){
                        order: 2;
                    }
                }
            }
        }
    }

`;
