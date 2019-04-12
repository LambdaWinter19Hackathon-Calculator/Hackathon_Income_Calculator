import styled from 'styled-components';

export const OutputContainer = styled.div`
    background: #ffffff;
    display: flex;
    flex-direction: column;
    width: 22%;
    padding: 20px;
    border-radius: 2px;
    box-shadow: 0 0 2px rgb(240, 240, 240);
    color: rgb(0, 0, 0);
    justify-content: flex-start;

    h5 {
        line-height: 1.6;
    }

    @media (max-width: 1024px) {
        width: 100%;
        min-height: 150px;
        justify-content: space-around;
        align-items: stretch;
    }
    @media (max-width: 600px) {
        width: 98%;
        flex-direction: column;
        margin: 0 auto;
        padding: 20px;
        padding-bottom: 0;
    }
`;

export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 80%;

    @media (max-width: 1024px) {
        flex-direction: row;
        width: 100%;
        justify-content: space-around;
        align-items: stretch;
    }
    @media (max-width: 600px) {
        width: 90%;
        flex-direction: column;
        justify-content: space-around;
        margin: 0 auto;
        padding: 10px;
    }
`;

export const Wrap = styled.div`
    line-height: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    @media (max-width: 1024px) {
        width: 25%;
        justify-content: space-between;
    }
    @media (max-width: 600px) {
        width: 100%;
        padding-bottom: 25px;
    }
    h5 {
        font-size: 1rem;
        @media (max-width: 600px) {
            font-size: 1.25rem;
        }
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

export const Title = styled.h4`
    text-align: center;
    font-weight: bold;
    color: #95041c;
    text-shadow: -1px 0px 0px;

    @media (max-width: 1024px) {
        margin-bottom: 25px;
        font-size: 1.8rem;
    }
    @media (max-width: 600px) {
        font-size: 2rem;
    }
`;

export const Nav = styled.div`
    display: flex;
    justify-content: center;
    vertical-align: center;
    margin-bottom: 30px;
    padding-top: 15px;

    @media (min-width: 1024px) {
        @media (max-width: 1055px) {
            flex-wrap: wrap;
        }
    }

    @media (max-width: 1024px) {
        margin-bottom: 20px;
    }
    @media (max-width: 600px) {
        margin-bottom: 30px;
    }
`;

export const NavItem = styled.button`
    border: 1px solid #95041c;
    color: #95041c;
    font-weight: bold;
    padding: 5px 0px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;

    @media (min-width: 1155px) {
        width: 45%;
    }

    @media (min-width: 1025px) {
        @media (max-width: 1154px) {
            width: 70%;
        }
    }

    @media (max-width: 1024px) {
        width: 140px;
    }
`;

export const selected = {
    background: '#95041c',
    color: 'white',
};
