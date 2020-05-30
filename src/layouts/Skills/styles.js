import styled, { keyframes } from 'styled-components';


export const Container = styled.section`
    position: relative;
    width: inherit;
    background-color: #252A2E;
    padding-top: 1.2rem;

    .c-skills__wrapper {
        display: grid;
        max-width: 100%;
        grid-template-areas:
            ". techSkills profSkills ."
        ;
        grid-template-columns: .07fr repeat(2,1fr) .07fr ;
        grid-column-gap: 6rem;
    }
`;

export const GroupSkills = styled.div`
    font-family: 'Righteous', cursive;
    font-weight: 400;
    position: relative;
    padding: 0 0 2em 0;
    grid-area: techSkills;

    h2 {
        font-weight: 400;
        color: #FFF;
        font-size: 28px;
        line-height: 30px;
        position: relative;
        letter-spacing: 0.5px;
        margin-bottom: 25px;
    }

    .c-listSkills {
        position: relative;

        .c-listSkills__item {
            text-transform: capitalize;
            color: rgb(196,197,198);
            padding: 1rem 0;
        }
    }

`;

// progress
const animationProgress = keyframes`
    from {
        width: 0;
    }
`;

export const ProgressBar = styled.div`
    position: relative;
    background: rgba(0, 0, 0, 0.5);
    height: 7px;
    border-radius: 4px;
    max-width:100%;
`;

export const HandleProgress = styled.div`
    position: absolute;
    margin: 8px 0;
    border-radius: 4px;
    position: relative;
    height: 7px;
    background: #1CB698;
    animation: ${animationProgress} 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1;

    &.progress__percentage{
        width: ${props => props.percentage}%;
    }

    span.percentage {
        position: absolute;
        display: inline-block;
        width: 40px;
        height: 40px;
        background: #1CB698;
        text-align: center;
        line-height: 40px;
        border-radius: 50%;
        font-weight: 600;
        letter-spacing: 0px;
        font-size: 15px;
        color: #fff;
        top: 0;
        transform: translateY(-50%);
        right: 0;
    }

`;

export const ProfessionalSkills = styled.div`
    font-family: 'Righteous', cursive;
    font-weight: 400;
    position: relative;
    padding: 0 0 2em 0;
    grid-area: profSkills;

    h2 {
        font-weight: 400;
        color: #FFF;
        font-size: 28px;
        line-height: 30px;
        position: relative;
        letter-spacing: 0.5px;
        margin-bottom: 25px;
    }

    .c-listSkillsProfessional {
        position: relative;

        .c-listSkillsProfessional__item {
            text-transform: capitalize;
            color: rgb(196,197,198);
            padding: 1rem 0;
        }
    }
`;
