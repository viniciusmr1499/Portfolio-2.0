import styled from 'styled-components';
import banner from '../../assets/banner-two.jpg';


export const Header = styled.header`
    top:0;
    opacity: .88;
    position: absolute;
    height: 700px;
    width: 100%;
    background: linear-gradient(135deg, rgba(0,0,0,1) 15%,rgba(0,0,0,.9) 80%, rgba(0,0,0,.9) 70%, rgba(0,0,0,.8) 50% ), url(${banner}) ;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    &:after{
        content: '';
        position: absolute;
        bottom: 0;
        display: block;
        width: 100%;
        border-bottom: 1px solid transparent;
    }
`;

export const NavBar = styled.nav`
    position: sticky;
    top: 0;
    z-index: 10;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin: 0 auto;
    /* background: #1e2327; */
    box-shadow: 0 0 20px rgba(0,0,0,.2);

    img.logo {
        height: 40px;
    }
`;

export const Container = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 600px;


`;
