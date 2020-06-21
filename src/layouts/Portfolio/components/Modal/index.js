import React from 'react';
import styled from 'styled-components';
import { ModalProvider } from 'styled-react-modal';
import FancyModalButton from './FancyModalButton';


const Container = styled.div`
    z-index: 1001;
`;

export default function Modal({ Slide, Card }) {
    return (
        <Container>
            <ModalProvider>
                <FancyModalButton Card={Card} Slide={Slide} />
            </ModalProvider>
        </Container>

    );
}
