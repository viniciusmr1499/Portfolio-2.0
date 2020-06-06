import styled from 'styled-components';

export const SiteFooter = styled.footer`
    position: relative;
    width: 100%;
    background-color: #252A2E;
    padding: 2rem 0;

    .copyright {
        text-align: center;
        font-family: "Work Sans", sans-serif;
        padding-top: .4rem;
        font-size: 16px;
        letter-spacing: 0.5px;
        line-height: 24px;

        span {
            font-family: 'Righteous', cursive;
            color: #1CB698;
        }
    }

    .up {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        width: 45px;
        height: 45px;;
        background: #1CB698;

        svg {
            height: 1.8rem;
        }
    }

    .c-list {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;

        .list {
            display: flex;
            align-items: center;
            justify-content: center;

            .list__item {
                width: 42px;
                height: 42px;
                display: block;
                border: 1px solid #FFF;
                border-radius: 50%;
                transition: .25s all;
                margin: .5rem .35rem;

                &:hover {
                    background: #1CB698;
                    border-color: #1CB698;
                }

                .list__link {
                    height: 100%;
                    width: 100%;
                    background: transparent;
                    display: flex;
                    align-items: Center;
                    justify-content:center;
                }
            }
        }
    }

    /* mobile  */
    @media screen and (max-width: 576px) {
        padding-right: .45rem;
        padding-left: .45rem;
    }
`;
