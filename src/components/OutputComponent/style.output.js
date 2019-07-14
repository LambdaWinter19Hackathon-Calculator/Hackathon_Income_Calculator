import styled from 'styled-components';
import { colors } from '../../style/colors';
import NumberFormat from 'react-number-format';

export const OutputContainer = styled.div`
    background: #ffffff;
    display: flex;
    flex-direction: column;
    width: 22%;
    padding: 3rem;
    padding-top: 0;
    border-radius: 2px;
    box-shadow: 0 0 2px rgb(240, 240, 240);
    color: ${colors.greyText};
    justify-content: flex-start;

    h5 {
        line-height: 1.6;
    }

    strong {
        color: rgb(50, 51, 60);
        font-size: 1.9rem;
    }

    /* @media (max-width: 1024px) {
        width: 100%;
        min-height: 150px;
        justify-content: space-around;
        align-items: stretch;
    } */
    @media (max-width: 1024px) {
        width: 95%;
        height: 700px;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        padding: 2rem;
        padding-bottom: 0;
    }
`;

export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 80%;

    /* @media (max-width: 1024px) {
        flex-direction: row;
        width: 100%;
        justify-content: space-around;
        align-items: stretch;
    } */
    @media (max-width: 1024px) {
        width: 90%;
        flex-direction: column;
        justify-content: space-around;
        margin: 0 auto;
        padding: 1rem;
    }
`;

export const Wrap = styled.div`
    line-height: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
/* 
    @media (max-width: 1024px) {
        width: 25%;
        justify-content: space-between;
    } */

    @media (max-width: 1024px) {
        width: 100%;
        padding-bottom: 3rem;
    }

    h5 {
        font-size: 1.6rem;

        @media (max-width: 600px) {
            font-size: 1.25rem;
        }
    }

    p {
        font-weight: 100;
    }
`;

export const Data = styled.p`
    padding-top: 10px;
    font-weight: 700;
    font-size: 1.4rem;

    @media (max-width: 600px) {
        font-size: 1.6rem;
    }
`;

export const Nav = styled.div`
    display: flex;
    justify-content: space-around;
    vertical-align: center;
    margin-bottom: 3rem;
    padding-top: 1.5rem;

    @media (min-width: 1024px) and (max-width: 1055px) {
            flex-wrap: wrap;
    }

    /* @media (max-width: 1024px) {
        margin-bottom: 2rem;
    } */
    @media (max-width: 1024px) {
        margin-bottom: 3rem;
        width: 50%;
    }
`;

export const NavItem = styled.button`
    color: gray;
    font-weight: bolder;
    font-size: 1.4rem;
    padding: 0.5rem 0px;
    text-align: center;
    border-radius: 0;
    border: 0;
    cursor: pointer;

    &:hover {
        font-size: 1.5rem;
        color: ${colors.mainRed};
        text-shadow: 0px 0px 1px grey;
    }

    @media (min-width: 1155px) {
        width: 45%;
    }

    @media (min-width: 1025px) and (max-width: 1154px) {
            width: 70%;
    }

    @media (max-width: 1024px) {
        width: 14rem;
    }
`;

export const NumberOutput = styled(NumberFormat)`
    font-size: 4.5rem;
    color: rgb(60, 60, 60);
    font-weight: 100;
`;

export const Button = styled.a`
    width: 100%;
    padding: 1rem;
    border-radius: 3px;
    background: ${colors.mainRed};
    color: white;
    text-decoration: none !important;
    text-align: center;
    margin: 0 auto;
    margin-top: 2rem;
    font-size: 1.6rem;
    cursor: pointer;
    transition: 0.2s;

    &:visited {
        color: white;
    }

    &:hover {
        color: white;
        transform: translateY(-3px);
    }

    &:active {
        color: white;
        transform: translateY(0px);
    }

    @media (max-width: 1024px) {
        display: none;
    }
`;

export const selected = {
    borderBottom: `2px solid ${colors.mainRed}`,
    color: `${colors.mainRed}`,
    fontSize: '1.6rem',
};
