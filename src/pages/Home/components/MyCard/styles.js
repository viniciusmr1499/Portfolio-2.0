import styled from 'styled-components';
import profile from '../../../../assets/me2.jpg';


export const Card = styled.div`
    position: relative;
    width: 400px;
    padding-top: 10rem;

    .banner {
        position: relative;
        background: #252a2e;
        box-shadow: 0 0 30px rgba(0,0,0,.3);
        width: 450px;
        height: auto;
        border-radius: 10px;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
    }

    .profile {
        margin-top:-25%;
        position: relative;
        top: 0;
        height: 320px;
        width: 320px;
        border: 12px solid #1CB698;
        border-radius: 50%;
        background-image: url(${profile});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top center;
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
        text-align:center;
        font-weight: 400;
        color: #eee;
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
        padding: .6rem;
        margin: 0 .35rem;
        transition: .25s all;

        &:hover {
            background: #1CB698;
            cursor: pointer;
        }
    }

`;

export const Anchor = styled.a.attrs(props => ({
    href: props.link,
    target: '_blank',
}))`
    /* code */
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .25s all;
`;
