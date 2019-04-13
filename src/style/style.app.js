import styled from 'styled-components';
import { colors } from './colors';

export const AppContainer = styled.div`
    min-height: 100vh;
    background: ${colors.footerBg};
`;

export const Container = styled.div`
    width: 100%;
    max-width: 140rem;
    margin: 0 auto;
`;

export const BodyContainer = styled.div`
    background: ${colors.bodyBg};
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 4rem;
    font-family: 'Montserrat', 'Helvetica', sans-serif;
    font-size: 0.9rem;
    margin: 0 auto;

    @media (max-width: 1024px) {
        flex-direction: column;
    }

    @media (max-width: 650px) {
        padding: 2rem 1rem;
    }
`;
