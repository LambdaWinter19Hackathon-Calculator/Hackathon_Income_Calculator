import styled from 'styled-components';
import { colors } from '../../style/colors';
import { InputGroupAddon } from 'reactstrap';

export const FormContainer = styled.div`
    background: #ffffff;
    display: flex;
    width: 22%;
    padding: 20px;
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
            font-size: 13px;
            margin-bottom: 2px;
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
                padding-bottom: 10px;
                width: 100%;
            }
        }

        .form-group {
            @media (max-width: 650px) {
                width: 48%;
            }
        }

        .input-group {
            input {
                border: 1px solid ${colors.inputBorder};
                color: rgb(0, 0, 0);
                font-size: 16px;
            }
        }

        .input-group-text {
            background: ${colors.bodyBg};
            font-size: 12px;
            font-weight: bolder;
            border: 1px solid ${colors.inputBorder};
            padding: 0 16px;
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
            margin-top: 15px;
            border: 0;
            border-radius: 3px;
            padding: 10px;
        }

        .submit {
            background: ${colors.mainRed};

            &:active {
                background: #b8b2a7 !important;
            }
        }

        .reset {
            background: white;
            color: ${colors.mainRed};
            border: 1px solid ${colors.mainRed};
            font-weight: bolder;

            &:active {
                background: #b8b2a7 !important;
            }

            @media (max-width: 1024px) {
                margin-bottom: 17px;
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
