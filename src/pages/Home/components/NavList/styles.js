import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    flex-direction: row;

    li {
        position: relative;
        padding: 0 1rem;
    }

    a.nav-link {
        position: relative;
        color: #fff;
        line-height: 22px;
        font-weight: 600;
        text-transform: uppercase;
        font-family: 'Lato', sans-serif;
        font-size: 14px;
        transition: .25s all ease;
        letter-spacing: .4px;

        &:hover {
            color: #1CB698;
        }

    }

    /* Mobile */
    @media screen and (max-width:768px){
        display: none
    }
`;
