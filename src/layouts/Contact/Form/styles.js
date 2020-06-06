import styled from 'styled-components';


export const Container = styled.div`
    position: relative;
    width: 80%;
    margin: 2.5rem auto 0 auto;
    display: grid;
    grid-template-areas:
        "form location"
    ;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;

    .c-location {
        grid-area: location;
        width: 100%;
        /* height: 500px; */
        height: auto;
        border: 4px solid #252A2E;
        border-radius: 0px;
        display: block;
        box-shadow: 0px 18px 18px 0 rgba(0, 0, 0, 0.2), 0px 18px 18px 0 rgba(0, 0, 0, 0.2) inset;


        .c-location__google {
            height: 100%;
            position: relative;
        }
    }

    .google-info {
        position: absolute;
        top: 30%;
        left: 0;
        right: 0;
        width: 100%;
        border-radius: 5px;
        display: flex;
        align-items:center;
        justify-content: center;

        .list {
            background-color: #252A2E;
            box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);
            font-family: 'work sans', sans-serif;
            border-radius: 5px;
            width: 75%;
            height: auto;
            padding:1rem 0;

            .list__item {
                padding: 10px 10px 20px 20px;
                color: #FFF;
                font-size: 13px;
                letter-spacing: 0.2px;
                line-height: 25px;
                font-weight: 700;
                display: block;
                width: 100%;
                display: flex;
                align-items: center;

                &:not(:last-child) {
                    border-bottom: 1px solid #1E2326;
                }

                svg {
                    margin-right: 1rem;
                    color: #1CB698;
                }
            }
        }
    }

    /* laptop */
    @media (min-width: 769px) and (max-width: 992px) {
        width: 80%;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2,1fr);
        grid-gap: 2.3rem 0;

        .c-location {
            grid-column: 1;
            grid-row: 2;

            .google-info .list {
                width: max-content;
            }
        }
    }

    /* tablet  */
    @media (max-width: 768px) {
        width: 90%;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2,1fr);
        grid-gap: 2.3rem 0;

        .c-location {
            grid-column: 1;
            grid-row: 2;

            .google-info .list {
                width: max-content;
            }
        }
    }


    /* mobile  */
    @media (max-width: 425px) {
        .c-location .google-info .list {
            width: 100%;
            margin: 0 1rem;
        }
    }

`;


export const FormContact = styled.form.attrs(props => ({
    method: '',
}))`
    position: relative;
    grid-area: form;
    width: 100%;
    display: flex;
    flex-direction: column;

    .form__control {

        background-color: #252A2E;
        border: 0px solid #D2D2D2;
        border-radius: 5px;
        height: 50px;
        padding: 18px;
        margin-bottom: 20px;
        line-height: 50px;
        box-shadow: 0px 18px 18px 0 rgba(0, 0, 0, 0.2);
        font-size: 15px;
        color: #FFF;
        letter-spacing: 0.5px;

        &::placeholder {
            color: #eee;
        }
    }

    .form__control--textarea, .form__control { font-family: "Work Sans", sans-serif;  }
    .form__control--textarea {
        background-color: #252A2E;
        border: 0px solid #D2D2D2;
        border-radius: 5px;
        height: 150px;
        padding: 18px;
        line-height: 20px;
        box-shadow: 0px 18px 18px 0 rgba(0, 0, 0, 0.2);
        font-size: 15px;
        width: 100%;
        color: #FFF;
        letter-spacing: 0.5px;

        &::-webkit-scrollbar {
            width: .6em !important;
        }

        &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3) !important;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #1CB698 !important;
            outline: 1px solid slategrey !important;
        }

        &::placeholder {
            color: #eee;
        }

    }

    .btn-form {
        width: 200px;
        font-size: 16px;
        color: #FFF;
        letter-spacing: 0.6px;
        font-weight: 500;
        background-color: transparent;
        display: inline-block;
        border-radius: 0px;
        vertical-align: middle;
        padding: 10px 22px;
        margin-top: 1.5rem;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        position: relative;
        -webkit-transition-property: color;
        transition-property: color;
        -webkit-transition-duration: 0.5s;
        transition-duration: 0.5s;
        border: 1px solid #FFF;
        -box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
        font-family: "Work Sans", sans-serif;

        &:hover {
            cursor: pointer;
        }

        &:before {
            content: "";
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #1CB698;
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            -webkit-transform-origin: 0 50%;
            transform-origin: 0 50%;
            -webkit-transition-property: transform;
            transition-property: transform;
            -webkit-transition-duration: 0.5s;
            transition-duration: 0.5s;
            border-radius: 0px;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
        }

        &:hover:before, &:focus:before, &:active:before {
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
            -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
            transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
        }

        svg {
            transform: translate(25%,12%);
        }
    }

    /* mobile  and tablet */
    @media screen and (max-width: 768px) {
        grid-column: 1;
    }

`;


