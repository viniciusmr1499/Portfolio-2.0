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

    /* and adjuste  */
    @media screen and (min-width: 1025px) and (max-width: 1150px) {
        transform: translate(0%);
    }

    /* laptop and notbooks */
    @media screen and (min-width: 769px) and (max-width: 1024px) {
        transform: translate(0%);

        li {
            padding: 0 .55rem;
        }
    }


    /* Mobile and tablet */
    @media screen and (max-width:768px) {
        margin-top: 0.4rem;
        flex-direction: column;
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        transform: translateX(0%);

        li {
            position: relative;
            padding: .4rem 1.5rem;
            border-bottom: 1px solid rgba(0,0,0,.2);
        }
    }
`;
