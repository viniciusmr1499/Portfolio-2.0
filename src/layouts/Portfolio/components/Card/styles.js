import styled from 'styled-components';

export const PortfolioCard = styled.div`
    position: relative;
    width: 350px;
    height: 312px;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
    margin-bottom: 30px;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    cursor: pointer;

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


    @media screen and (min-width: 1024px) and (max-width: 1300px) {
        width: 100%;
        margin: 0;
    }

    @media screen and (max-width:1024px) {
        width: 100%;
        margin: 0;
    }

    /* tablet  */
    @media screen and (min-width: 577px) and (max-width: 768px) {
        width: 100%;
        margin: 0;
    }

    /* mobile */
    @media screen and (max-width:576px) {
        width: 80%;
        margin: 1rem auto;
    }

    /* mobile */
    @media screen and (max-width:425px) {
        width: 100%;
    }
`;
