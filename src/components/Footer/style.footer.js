import styled from 'styled-components';
import { colors } from '../../style/colors';

export const Wrapper = styled.div`
    background: ${colors.footerBg};
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Montserrat', 'Helvetica', sans-serif;
`;

export const List = styled.ul`
    display: flex;
    justify-content: center;
    list-style-type: none;

    @media (max-width: 650px) {
        flex-direction: column;
    }
`;
export const Items = styled.li`
    padding: 0 10px;
    transition: 0.3s;
    font-size: 14px;

    &:not(:last-child) {
        margin-right: 15px;
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
