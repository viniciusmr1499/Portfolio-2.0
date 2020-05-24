import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    flex-direction: row;

    li {
        padding: 0 1rem;
    }

    a.nav-link {
        color: #fff;
        line-height: 22px;
        font-weight: 600;
        text-transform: uppercase;
        font-family: 'Lato', sans-serif;
        font-size: 14px;
        transition: .25s all;
        letter-spacing: .4px;

        &:hover {
            color: #41c2fb;
        }
    }

    /* Mobile */
    @media screen and (max-width:768px){
        display: none
    }
`;
