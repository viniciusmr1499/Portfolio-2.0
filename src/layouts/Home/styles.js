import styled, { css, keyframes } from 'styled-components';
import banner from '../../assets/bg-banner.jpg';
;

export const Header = styled.header`
    position: fixed;
    top:0;
    z-index: 1001;
    height: 70px;
    width: 100%;
    background: #1e2326;
    /* box-shadow: 0 0 20px rgba(0,0,0,.2); */

    &:after{
        content: '';
        position: absolute;
        bottom: 0;
        display: block;
        width: 100%;
        border-bottom: 1px solid transparent;
    }
`;

const effect = keyframes`
    to{
        opacity: .4;
        filter: grayscale(1);
        transform: rotateZ(1turn);
    }
    from{
        opacity: 1;
        filter: grayscale(0);
    }
`;

export const NavBar = styled.nav`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin: 0 auto;

    a.logo{
        display: flex;
        align-items: center;
        font-size: 36px;
        font-weight: 700;
        letter-spacing: .08rem;
        color: #1CB698;
        transition: all 0.5s ease 0s;
        font-family: 'Righteous', cursive;

        svg {
            animation: ${effect} 2.5s alternate-reverse infinite;
            margin-left: .3rem;
        }
    }

    /* laptop and notbooks */
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        .logo { transform: translateX(1rem); }
    }

    /* mobile and tablet */
    @media screen and (max-width: 768px){
        justify-content: space-between;

        .logo {
            display: table;
            margin: 0 auto;
        }

        .collapse-nav {
            transition: .05s transform;
            position: absolute;
            width: 180px;
            top: 100%;
            left: 24.2px;
            background-color: #1E2326;
            height: max-content;
            border-radius: 4px;
            transform-origin: top;
            border: .5px solid #1CB698;
            opacity: 0;
            transform: translateY(-200%);
        }

        /* toggled  */
        .collapse-nav.toggled {
            transition: .25s all;
            transform: translate(0%);
            opacity:1;
            transform-origin: top;
        }
    }


`;

export const Toggle = styled.button`
    display: none;
    transition: .25s all;
    position: relative;
    height: 24px;
    width: 31px;
    border: 0;
    background: none;
    outline: none;
    padding: 0;
    margin: 0;

    .icon__bar {
        position: absolute;
        width: 100%;
        height: 3px;
        background: #1CB698;
        transition: .25s;

        &:first-child {
            top: 0;
            left: 0;
        }

        &:nth-child(2){
            left: 0;
        }

        &:last-child {
            bottom: 0;
            left: 0;
        }

        /* quando toggled tiver sofrido um clique */
        ${props => props.on && css`
            &:first-child {
                top: 50%;
                left: 0;
                transform: rotate(45deg)
            }

            &:nth-child(2){
                background: transparent;
                box-shadow: none;
                transform: translate(-200%,100%);
                transform-origin: center;
            }

            &:last-child {
                top: 50%;
                left: 0;
                transform: rotate(-45deg)
            }
        `}

    }

    @media screen and (max-width: 768px) {
        display: flex;
        align-items: center;
        order: -1;
        margin-left: 1.5rem;
    }
`;

export const Container = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 700px;
    box-sizing: border-box;
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    padding-top: 11rem;



    /* mobile  */
    @media screen and (max-width: 576px) {
        height: 500px;
    }

    /* tablet and laptop */
    @media screen and (min-width: 577px) and (max-width:1024px) {
        padding-top: 9rem;
    }
`;
