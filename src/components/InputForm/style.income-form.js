import styled from 'styled-components';
import { colors } from '../../style/colors';

export const FormContainer = styled.div`
    background: #ffffff;
    display: flex;
    width: 24%;
    padding: 2rem;
    box-shadow: 0 0 2px rgb(240, 240, 240);
    color: rgb(0, 0, 0);
    border-radius: 2px;
    align-items: center;

    /* @media (max-width: 1024px) {
        width: 100%;
    } */

    @media (max-width: 1024px) {
        flex-direction: column;
        width: 95%;
        margin-top: 3rem;
    }

    @media (max-width: 411px) {
        width: 100%;
        margin-top: 0rem;
    }

    .form-input-heading {
        display: none;

        @media (max-width: 1024px) {
            display: initial;
            padding: 10px;
            font-weight: 300;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 100%;
        margin: 0 auto;
        height: 100%;

        label {
            font-size: 1.3rem;
            margin-bottom: 5px;
        }

        /* @media (max-width: 1024px) {
            flex-direction: row;
            justify-content: space-around;
        } */

        @media (max-width: 1024px) and (min-width: 412px) {
            flex-direction: column;
            width: 90%;
        }


        .form-input-div {
            height: 33%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            /* @media (max-width: 1024px) {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 30%;
                height: 100%;
            } */

            @media (max-width: 1024px){
                /* flex-direction: row; */
                /* flex-wrap: wrap; */
                align-items: flex-end;
                /* padding-bottom: 1rem; */
                width: 100%;
            }
        }

        .form-group {
            @media (max-width: 1024px) {
                width: 100%;
            }
        }

        .input-group {
            height: 4rem;

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
            color: rgb(166,166,183);
        }

        .button-div {
            display: flex;
            flex-direction: column;

            @media (max-width: 1024px) {
                width: 100%;
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

            /* @media (max-width: 1024px) {
                margin-bottom: 1.7rem;
            } */

            @media (max-width: 1024px) {
                display: none;
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
