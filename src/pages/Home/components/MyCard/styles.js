import styled, { keyframes } from 'styled-components';

const circle = keyframes`
    0% {
        box-shadow: 0 0 0 0 rgba(28, 182, 152, 0.2), 0 0 0 1em rgba(28, 182, 152, 0.2), 0 0 0 3em rgba(28, 182, 152, 0.2), 0 0 0 5em rgba(28, 182, 152, 0.2);
    }
    100% {
        box-shadow: 0 0 0 1em rgba(28, 182, 152, 0.2), 0 0 0 3em rgba(28, 182, 152, 0.2), 0 0 0 5em rgba(28, 182, 152, 0.2), 0 0 0 8em rgba(28, 182, 152, 0);
    }

`;

export const Card = styled.div`
    position: relative;
    width: 400px;
    padding-top: 10rem;

    .banner {
        position: relative;
        background: #252a2e;
        box-shadow: 0 0 30px rgba(0,0,0,.3);
        width: 400px;
        height: auto;
        border-radius: 10px;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
    }
    .circle-riple {
        position: absolute;
        border-radius: 50%;
        background-color: transparent;
        transform: translateY(-5%);
        height: 200px;
        width: 200px;
        margin-top:-34%;
        animation-name: ${circle};
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    .profile {
        margin-top:-25%;
        position: relative;
        top: 0;
        height: 320px;
        width: 320px;
        border: 12px solid #1CB698;
        border-radius: 50%;
    }

    h1 {
        font-family: 'Lato', sans-serif;
        font-size: 2.5rem;
        font-weight: bold;
        margin-top: 1rem;
    }

    h3 {
        font-family: 'Lato', sans-serif;
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
    }

    li {
        width: 100%;
        display: block;
        border: 1.4px solid #eee;
        border-radius: 50%;
        margin: 0 .35rem;
        transition: .25s all;

        &:hover {
            background: #1CB698;
            cursor: pointer;
            transform: translateY(-8px);
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
    padding: .6rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;
