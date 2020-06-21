import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import Modal from 'styled-react-modal';

const StyledModal = Modal.styled`
    display: flex;
    flex-direction: column;
    position: relative;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10001 !important;
    opacity: ${props => props.opacity};
    background-color: #1E2326;
`;

const CloseModal = styled.button`
    position: absolute;
    top: 0;
    right:0;
    background: none;
    color: #fff;
    transition: .25s all;
    transform: translate(-100%, 20%);

    &:hover {
        color: #337ab7;
    }
`;

export default function ModalButton({ Slide, Card }) {
    const [isOpen, setIsOpen] = useState(false)

    function toggleModal(e) {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div style={{ zIndex: 0 }} onClick={toggleModal}>{Card}</div>
            <StyledModal
                isOpen={isOpen}
                onBackgroundClick={toggleModal}
                onEscapeKeydown={toggleModal}>
                {Slide}
                <CloseModal onClick={toggleModal}><FaTimes size={32} /></CloseModal>
            </StyledModal>
        </>
    );
}
