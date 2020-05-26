import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    transform: translateX(12%);

    li {
        position: relative;
        padding: 0 1rem;
    }

    a.nav-link {
        display: inline-block;
        position: relative;
        color: #fff;
        line-height: 22px;
        font-weight: lighter;
        text-transform: uppercase;
        font-family: 'Work Sans', sans-serif;
        font-size: 15px;
        transition: .25s all ease;
        letter-spacing: .4px;

        &:hover:before{
            max-width: 100%;
        }
        &:before{
            content: attr(data-hover);
            position: absolute;
            overflow: hidden;
            color: #1CB698;
            max-width: 0;
            -webkit-transition: max-width 0.8s;
            -moz-transition: max-width 0.8s;
            transition: max-width 0.8s;
        }
    }

    /* Mobile */
    @media screen and (max-width:768px){
        display: none
    }
`;
