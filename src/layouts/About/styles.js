import styled from 'styled-components';

export const AboutSection = styled.section`
    position: relative;
    padding-top: 3rem;
    padding-bottom: 2rem;
    max-width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: (repeat(4,1fr));

    .description {
        text-align: justify;
        font-family: "Work Sans", sans-serif;
        font-size: 16px;
        line-height: 25px;
        letter-spacing: .03rem;
        font-weight: 400;
        padding-bottom: 3rem;
        grid-column: 1/3;
        color: #eee;

        span {
            font-family: "Work Sans", sans-serif;
            font-weight: bold;
            color: #1CB698;
        }
    }

    h2.title__details {
        font-family: 'Righteous', cursive;
        color: #FFF;
        font-weight: 400;
        font-size: 28px;
        line-height: 30px;
        position: relative;
        letter-spacing: 0.5px;
        margin-bottom: 25px;
    }

    h2.title__myInterests {
        grid-column: 2;
        grid-row: 4;
        font-family: 'Righteous', cursive;
        color: #FFF;
        font-weight: 400;
        font-size: 28px;
        line-height: 30px;
        position: relative;
        letter-spacing: 0.5px;
        margin-bottom: 25px;
    }

    .curriculum {
        grid-column: 1/3;
        position: relative;
        width: 100%;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;


        a.cv:hover, a.cv:focus, a.cv:active {
            color: #FFF;
            border-color: #1CB698;
            cursor: pointer;
        }

        a.cv:hover:before, a.cv:focus:before, a.cv:active:before {
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
            -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
            transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
        }
    }

    a.cv {
        font-family: 'Righteous', cursive;
        font-weight: 400;
        margin: 1.5rem auto;
        text-align: center;
        width: 176px;
        height: 43.25px;
        border: 1px solid #eee;
        grid-column: 1 /3;
        grid-row: 6;
        font-size: 16px;
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
        -box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);


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

        svg {
            padding-left: .2rem;
        }
    }

    /* notbook  */
    @media screen and (min-width: 769px) and (max-width: 1024px) {
        h2.title__details {
            grid-column: 1/3;
            margin-bottom: 25px;
            grid-row: 4;
        }

        h2.title__myInterests {
            grid-row: 6;
            grid-column: 1/3;
            margin-top: 2rem;
        }
    }

    /* tablet  */
    @media screen and (min-width: 577px) and (max-width: 768px) {

        .description {
            padding-bottom: 2rem;
            grid-column: 1/3;
        }

        h2.title__details {
            grid-column: 1/3;
            margin-bottom: 25px;
            grid-row: 4;
        }

        h2.title__myInterests {
            grid-row: 6;
            grid-column: 1/3;
            margin-top: 2rem;
        }
    }

    /* mobile  */
    @media screen and (max-width: 576px) {
        grid-template-columns: 1fr;
        grid-template-rows: (repeat(4,1fr));
        max-width: 90%;

        .description {
            grid-column: 1;
            width: 100%;
        }

        h2.title__details { font-size: 24px; line-height: 26px; }

        h2.title__myInterests {
            grid-column: 1;
            grid-row: auto;
            margin-top: 2rem;
        }

        .curriculum {
            grid-column: 1;
            padding-top: 0;
        }

        a.cv {
            grid-column: 1;
            grid-row: auto;

        }

    }
`;

export const ListDetails = styled.ul`
    grid-column: 1/2;
    display: grid;
    max-width: 60%;

    li {
        font-family: 'Righteous', cursive;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .2rem 0;
        line-height: 30px;
        margin: 0;

        .detail__title {
            font-weight: 400;
            color: #1CB698;
            text-align: justify;
        }

        .response_details {
            font-weight: 400;
            color: rgb(196,197,198);
        }

        .dev {
            background: #1CB698;
            padding: 2px 8px;
            border-radius: 5px;
            font-weight: 600;
        }

        &:last-child .response_details {
            color: #eee;
        }
    }

    @media screen and (min-width: 1025px) and (max-width: 1200px) {
        max-width: 90%;
    }

    /* laptop and notbook  */
    @media screen and (min-width: 769px) and (max-width: 1024px) {
        max-width: 100%;
        grid-column: 1/3;
        grid-row: 5;
    }
    /* tablet */
    @media screen and (min-width: 577px) and (max-width: 768px) {
        max-width: 100%;
        grid-column: 1/3;
        grid-row: 5;
    }

     /* mobile  */
     @media screen and (max-width: 576px) {
        grid-column: 1;
        max-width: 100%;
    }

`;

export const ListMyInterests = styled.ul`
    grid-column: 2;
    grid-row: 5;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    max-width: 100%;

    li {
        font-family: 'Righteous', cursive;
        display: inline-block;
        text-align: center;
        width: 100px;
        cursor: pointer;
        padding: 12px 10px;
        transition: all 0.8s ease 0s;
        margin-bottom: 25px;
        border-radius: 10px;
        background: #252A2E;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12) inset;

        &:hover {
            background: #1CB698;
        }

        span {
            text-transform: uppercase;
            font-weight: 500;
            margin-top: 8px;
            display: block;
        }
    }

    /* adjust  */
    @media screen and (min-width: 1025px) and (max-width: 1200px) {
        grid-column-gap: .6rem;
    }

    /* laptop and notbook  */
    @media screen and (min-width: 769px) and (max-width: 1024px) {
        grid-column: 1/3;
        grid-column-gap: 1rem;
        grid-row: 7;

        .interests__item {
            width: 100%;
        }
    }

    /* tablet  */
    @media screen and (min-width: 577px) and (max-width: 768px) {
        grid-column: 1/3;
        grid-column-gap: 1rem;
        grid-row: 7;

        .interests__item {
            width: 100%;
        }
    }

    /* mobile display large  */
    @media screen and (min-width: 426px) and (max-width: 576px) {
        grid-column: 1;
        grid-row: auto;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 1rem;

        .interests__item {
            width: 100%;
        }
    }

    /* mobile  */
    @media screen and (max-width: 425px) {
        grid-column: 1;
        grid-row: auto;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 1rem;

        .interests__item {
            width: 100%;
        }
    }

`;
