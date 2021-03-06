import styled from 'styled-components';
import { colors } from '../../style/colors';

export const Wrapper = styled.div`
    background: ${colors.footerBg};
    height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Lato', sans-serif;

    .icon {
        color: white;
        margin-right: 3rem;
        font-size: 1.8rem;
        transition: 0.2s;

        &:hover {
            transform: translateY(-3px);
        }
    }

    .margin-left {
        margin-left: 1rem;
    }
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    list-style-type: none;
`;
export const Items = styled.li`
    padding: 0 1rem;
    transition: 0.2s;
    font-size: 1.4rem;

    &:not(:last-child) {
        margin-right: 1.5rem;
    }

    &:hover {
        transform: translateY(-3px);

        a {
            text-decoration: none;
            color: white;
            text-shadow: 0 0 3px ${colors.mainRed};
        }
    }

    a {
        color: white;
        text-decoration: none;
    }
`;
