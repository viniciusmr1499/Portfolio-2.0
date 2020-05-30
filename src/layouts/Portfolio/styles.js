import styled, { keyframes } from 'styled-components';

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

`;


const visible = keyframes`
    0% {
        opacity: 0;
        transform: scale3d(.3, .3, .3)
    }
    50% {
        opacity: 1;
    }
`;

export const PortfolioCard = styled.div`
    position: relative;
    width: 350px;
    margin-top: 3rem;
    animation: ${visible} .5s;
	-webkit-backface-visibility: visible;
	backface-visibility: visible;
	margin-bottom: 30px;
	position: relative;
	overflow: hidden;
	border-radius: 10px;

    figcaption {
        position: absolute;
        padding: 15px;
        height: 100%;
        width: 100%;
        top: auto;
        left: 0;
        color: #fff;
        bottom: 0;
        z-index: 10;
        -moz-transition: 0.5s;
        -o-transition: 0.5s;
        -webkit-transition: 0.5s;
        transition: 0.5s;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    figcaption:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        -webkit-transition: all 0.4s ease-out;
        -moz-transition: all 0.4s ease-out;
        -o-transition: all 0.4s ease-out;
        -ms-transition: all 0.4s ease-out;
        transition: all 0.4s ease-out;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        transform: translateX(0) translateY(0) translateZ(0) rotate(0deg) scale(0.95);
        -o-transform: translateX(0) translateY(0) translateZ(0) rotate(0deg) scale(0.95);
        -ms-transform: translateX(0) translateY(0) translateZ(0) rotate(0deg) scale(0.95);
        -moz-transform: translateX(0) translateY(0) translateZ(0) rotate(0deg) scale(0.95);
        -webkit-transform: translateX(0) translateY(0) translateZ(0) rotate(0deg) scale(0.95);
        z-index: -1;
        opacity: 0;
    }
    figcaption svg {
        margin: 0;
        padding: 0;
        font-size: 26px;
        font-weight: 400;
        line-height: 35px;
        position: absolute;
        text-align: center;
        width: 100%;
        left: 0;
        top: 45%;
        margin-top: -22px;
        transform: translateX(0px) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -o-transform: translateX(0px) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -ms-transform: translateX(0px) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -moz-transform: translateX(0px) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -webkit-transform: translateX(0px) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        opacity: 0;
        letter-spacing: 0px;
    }
    figcaption .title {
        margin: 0;
        padding: 0;
        position: absolute;
        text-align: center;
        font-family: 'work sans', sans-serif;
        font-size: 14px;
        width: 100%;
        left: 0;
        right: 0;
        font-size: 20px;
        line-height: 30px;
        text-transform: capitalize;
        top: 50%;
        margin-top: 30px;
        margin-top: -2px;
        transform: translateX(80px) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -o-transform: translateX(80px) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -ms-transform: translateX(80px) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -moz-transform: translateX(80px) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -webkit-transform: translateX(80px) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -webkit-transition: all 0.4s ease-out;
        -moz-transition: all 0.4s ease-out;
        -o-transition: all 0.4s ease-out;
        -ms-transition: all 0.4s ease-out;
        transition: all 0.4s ease-out;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        opacity: 0;
        letter-spacing: 0px;
    }
    figcaption .sub-title {
        margin: 0;
        padding: 0;
        position: absolute;
        font-family: 'work sans', sans-serif;
        text-align: center;
        width: 100%;
        left: 0;
        font-size: 14px;
        top: 50%;
        margin-top: 30px;
        transform: translateX(-70px) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -o-transform: translateX(-70px) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -ms-transform: translateX(-70px) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -moz-transform: translateX(-70px) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -webkit-transform: translateX(-70px) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -moz-transition: 0.5s;
        -o-transition: 0.5s;
        -webkit-transition: 0.5s;
        transition: 0.5s;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        opacity: 0;
        letter-spacing: 0px;
    }
    figcaption a {
        position: absolute;
        z-index: 1111;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        text-indent: -99999px;
    }

    &:hover {
        -webkit-transition: all 0.4s ease-out;
        -moz-transition: all 0.4s ease-out;
        -o-transition: all 0.4s ease-out;
        -ms-transition: all 0.4s ease-out;
        transition: all 0.4s ease-out;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    &:hover figcaption {
        color: #fff;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: rgba(28, 182, 152, 0.9);
    }
    &:hover figcaption:after {
        opacity: 1;
        transform: translateX(0) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -o-transform: translateX(0) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -ms-transform: translateX(0) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -moz-transform: translateX(0) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -webkit-transform: translateX(0) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -webkit-transition: all 0.4s ease-out;
        -moz-transition: all 0.4s ease-out;
        -o-transition: all 0.4s ease-out;
        -ms-transition: all 0.4s ease-out;
        transition: all 0.4s ease-out;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    &:hover figcaption svg {
        transform: translateX(0px) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -o-transform: translateX(0px) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -ms-transform: translateX(0px) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -moz-transform: translateX(0px) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -webkit-transform: translateX(0px) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -moz-transition: 0.2s;
        -o-transition: 0.2s;
        -webkit-transition: 0.2s;
        transition: 0.2s;
        opacity: 1;
    }
    &:hover figcaption .title {
        transform: translateX(0px) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -o-transform: translateX(0px) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -ms-transform: translateX(0px) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -moz-transform: translateX(0px) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -webkit-transform: translateX(0px) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -moz-transition: 0.4s;
        -o-transition: 0.4s;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        opacity: 1;
    }
    &:hover figcaption .sub-title {
        transform: translateX(0px) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -o-transform: translateX(0px) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -ms-transform: translateX(0px) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -moz-transform: translateX(0px) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -webkit-transform: translateX(0px) translateY(0) translateZ(0) rotate(0deg) scale(1);
        -moz-transition: 0.6s;
        -o-transition: 0.6s;
        -webkit-transition: 0.6s;
        transition: 0.6s;
        opacity: 1;
    }

    img {
        width: 100%;
        height: 100%;
    }

    figcaption {
        position: absolute;
        padding: 15px;
        height: 100%;
        width: 100%;
        top: auto;
        left: 0;
        color: #fff;
        bottom: 0;
        z-index: 10;
        -moz-transition: 0.5s;
        -o-transition: 0.5s;
        -webkit-transition: 0.5s;
        transition: 0.5s;
        -webkit-font-smoothing: antialiased;
    }
`;
