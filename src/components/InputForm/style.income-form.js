import styled from 'styled-components';
import { colors } from '../../style/colors';

export const FormContainer = styled.div`
    background: #ffffff;
    display: flex;
    width: 22%;
    padding: 2rem;
    box-shadow: 0 0 2px rgb(240, 240, 240);
    color: rgb(0, 0, 0);
    border-radius: 2px;

    @media (max-width: 1024px) {
        width: 100%;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 100%;
        margin: 0 auto;

        label {
            font-size: 1.4rem;
            margin-bottom: 3px;
        }

        @media (max-width: 1024px) {
            flex-direction: row;
            justify-content: space-around;
        }

        @media (max-width: 650px) {
            flex-direction: column;
        }

        .form-input-div {
            height: 33%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            @media (max-width: 1024px) {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 30%;
                height: 100%;
            }

            @media (max-width: 650px) {
                flex-direction: row;
                flex-wrap: wrap;
                align-items: flex-end;
                padding-bottom: 1rem;
                width: 100%;
            }
        }

        .form-group {
            @media (max-width: 650px) {
                width: 48%;
            }
        }

        .input-group {
            height: 3.5rem;

            input {
                border: 1px solid ${colors.inputBorder};
                color: rgb(0, 0, 0);
                font-size: 1.6rem;
                height: 100%;
            }
        }

        .input-group-text {
            background: ${colors.addonBg};
            font-size: 1.2rem;
            font-weight: bolder;
            border: 1px solid ${colors.inputBorder};
            padding: 0 1.6rem;
        }

        .button-div {
            display: flex;
            flex-direction: column;

            @media (max-width: 650px) {
                width: 48%;
            }
        }

        button {
            width: 100%;
            margin-top: 1.5rem;
            border: 0;
            border-radius: 3px;
            padding: 1rem;
            transition: 0.2s;
            font-size: 1.6rem;
        }

        .submit {
            background: ${colors.mainRed};

            &:hover {
                transform: translateY(-3px);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .reset {
            background: white;
            color: ${colors.mainRed};
            border: 1px solid ${colors.mainRed};
            font-weight: bolder;

            &:hover {
                transform: translateY(-3px);
            }

            &:active {
                transform: translateY(0px);
            }

            @media (max-width: 1024px) {
                margin-bottom: 1.7rem;
            }
        }
    }
`;

export const TitleWrap = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const tooltip = {
    cursor: 'pointer',
};
