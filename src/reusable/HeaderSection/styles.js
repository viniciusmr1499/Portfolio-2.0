import styled from 'styled-components';

export const Title = styled.h1`
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
    grid-column: 1/3;

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

    /* mobile  */
    @media screen and (max-width: 576px) {
        grid-column: 1;
        font-size: 34px;
        line-height: 40px;
    }
`;

export const TopSection = styled.span`
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
    grid-column: 1/3;

     /* mobile  */
     @media screen and (max-width: 576px) {
        grid-column: 1;
        margin: 1.5rem auto 1rem auto;
    }
`;
