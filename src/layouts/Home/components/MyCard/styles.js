import styled, { keyframes } from 'styled-components';

const circle = keyframes`
    0% {
        box-shadow: 0 0 0 0 rgba(28, 182, 152, 0.2), 0 0 0 1em rgba(28, 182, 152, 0.2), 0 0 0 3em rgba(28, 182, 152, 0.2), 0 0 0 5em rgba(28, 182, 152, 0.2);
    }
    100% {
        box-shadow: 0 0 0 1em rgba(28, 182, 152, 0.2), 0 0 0 3em rgba(28, 182, 152, 0.2), 0 0 0 5em rgba(28, 182, 152, 0.2), 0 0 0 8em rgba(28, 182, 152, 0);
    }

`;

const faded = keyframes`
    0% {
        transform: translateY(-100%);
        opacity: .2;
    }

    100% {
        opacity: 1;
        transform: translateX(0%);
    }
`;

export const Card = styled.div`
    position: relative;
    width: auto;
    height: auto;
    z-index: 1;
    transition: .25s all;
    animation-delay: 1s;
    animation: ${faded} 1.5s cubic-bezier(0.27, 1.38, 0.45,-0.23) 1;

    &:hover {
        transform: scale(1.05) translateY(-5%);
        cursor: pointer;

    }

    .banner {
        position: relative;
        background: #252a2e;
        box-shadow: 0 0 30px rgba(0,0,0,.3);
        width: 420px;
        height: auto;
        border-radius: 10px;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
        padding-bottom: 1.5em;
    }

    .wrapper {
        width: 100%;
        background: transparent;
        position: relative;
        display: flex;
        justify-content: center;
    }

    .circle-riple {
        position: absolute;
        top: 0;
        border-radius: 50%;
        background-color: transparent;
        transform: translateY(-50%);
        height: 200px;
        width: 200px;
        animation: ${circle} 1s linear infinite;
        animation-delay: 1.5s;
    }

    .profile {
        z-index: 1;
        margin-top:-38%;
        margin-bottom: 1rem;
        position: relative;
        top: 0;
        height: 320px;
        width: 320px;
        border: 12px solid #1CB698;
        border-radius: 50%;
        transition: transform .25s;

        &:hover{
            transform-origin: center;
        }
    }

    h1 {
        font-family: 'Lato', sans-serif;
        font-family: 'Righteous', cursive;
        font-size: 2.5rem;
        margin-top: 1.1rem;
    }

    h3 {
        font-family: 'Lato', sans-serif;
        font-family: 'Righteous', cursive;
        line-height:30px;
        width: 100%;
        font-weight: 400;
        color: #eee;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            padding-left: .4rem;
        }
    }

    ul {
        margin: 2rem 0 ;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    li {
        width: 100%;
        display: block;
        border: 1.4px solid #eee;
        border-radius: 50%;
        margin: 0 .3rem;
        transition: .25s all;
        background: transparent;
        background-size: 200%;

        &:hover {
            background: #1CB698;
            cursor: pointer;
            transform: translateY(-.5rem);
        }

        &:active {
            background: #3498db;
        }
    }

`;

export const Anchor = styled.a.attrs(props => ({
    href: props.link,
    target: '_blank',
}))`
    /* code */
    transition: .25s all;
    /* padding: .5rem; */
    height: 42px;
    width: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
