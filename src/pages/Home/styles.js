import styled from 'styled-components';

export const Header = styled.header`
    top:0;
    z-index: 1001;
    position: fixed;
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    box-shadow: 0 0 20px rgba(0,0,0,.2);
`;

export const NavBar = styled.nav`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 80%;
    margin: 0 auto;

    img.logo {
        height: 40px;
    }
`;

export const Container = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const Card = styled.div`

`;
