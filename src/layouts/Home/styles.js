import styled, { keyframes } from 'styled-components';
// import banner from '../../assets/banner-two.jpg';
// import banner from '../../assets/banner-two.jpg';
import banner from '../../assets/bg-banner.jpg';

export const Header = styled.header`
    position: sticky;
    top:0;
    z-index: 1001;
    height: 70px;
    width: 100%;
    background: #1e2326;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center; */
    &:after{
        content: '';
        position: absolute;
        bottom: 0;
        display: block;
        width: 100%;
        border-bottom: 1px solid transparent;
    }
`;

const effect = keyframes`
    to{
        opacity: .4;
        filter: grayscale(1);
        transform: rotateZ(1turn);
    }
    from{
        opacity: 1;
        filter: grayscale(0);
    }
`;

export const NavBar = styled.nav`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin: 0 auto;

    /* aplicar esse estilo quando scrollar  */
    /* background: #1e2326;
    box-shadow: 0 0 20px rgba(0,0,0,.2); */

    img.logo {
        height: 30px;
    }

    a.logo{
        display: flex;
        align-items: center;
        font-size: 36px;
        font-weight: 700;
        letter-spacing: .08rem;
        color: #1CB698;
        transition: all 0.5s ease 0s;
        font-family: 'Righteous', cursive;

        svg {
            animation: ${effect} 2.5s alternate-reverse infinite;
            margin-left: .3rem;

            &:hover {
                filter: grayscale(0);
            }
        }
    }
`;

export const Container = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 700px;
    box-sizing: border-box;
    /* background: linear-gradient(130deg, #1e2326 15%,rgba(0,0,0,.9),rgba(0,0,0,.7) ,rgba(0,0,0,.9),rgba(0,0,0,.5)), url(${banner}); */
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    padding-top: 11rem;
`;
