import React from 'react';
import { Title, TopSection } from './styles';

export default function HeaderSection({ content, icon }) {
    return (
        <>
            <TopSection>
                {icon}
            </TopSection>
            <Title>
                {content}
            </Title>
        </>
    );
}
