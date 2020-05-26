import styled from 'styled-components';

export const AboutSection = styled.section.attrs(props => ({
    id: '#about',
}))`
    position: relative;
    padding-top: 3rem;
    max-width: 80%;
    margin: 0 auto;

    div {
        background: #252A2E;
        box-shadow: 0 0 30px rgba(0,0,0,.2);
        border-radius: 5px;
        width: 60px;
        height: auto;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 1.7rem auto 1rem auto;

        svg {

        }
    }

    h1 {
        position: relative;
        font-family: 'Righteous', cursive;
        color: #FFF;
        font-size: 48px;
        line-height: 50px;
        text-align: center;
        padding-bottom: 20px;
        position: relative;
        display: table;
        margin: 0 auto 30px auto;

        &:after{
            content: "";
            position: absolute;
            border-bottom: 1px solid #1CB698;
            width: 40px;
            bottom: 0;
            left: 0;
            margin: 0 auto;
            display: table;
        }

        &:before{
            position: absolute;
            content: "";
            border-bottom: 1px solid #1CB698;
            width: 80px;
            bottom: 8px;
            left: 0;
            margin: 0 auto;
        }
    }

    .description {
        text-align: justify;
        font-family: "Work Sans", sans-serif;
        font-size: 16px;
        letter-spacing: .05rem;
        font-weight: 400;
        padding-bottom: 3rem;

        span {
            font-family: "Work Sans", sans-serif;
            font-weight: bold;
            color: #1CB698;
        }
    }
`;
