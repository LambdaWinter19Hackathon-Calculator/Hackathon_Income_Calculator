import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/lambda-logo.png';
import { colors } from '../../style/colors';

const Header = () => {
    return (
        <HeaderContainer>
            <div className="logo-content">
                <img src={logo} alt="Compound logo in Lambda School red" />
                <p className="compound">Compound</p>
            </div>
        </HeaderContainer>
    );
};

//CSS ------------------------------------------------------------------------------------------------------------------------------------------------------------------
const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 0.5px solid rgb(245, 245, 245);
    padding: 20px;
    max-height: 70px;
    background: ${colors.headerBg};

    .logo-content {
        display: flex;
        justify-content: center;

        img {
            height: 30px;
            width: auto;
            margin-right: 10px;
        }

        .compound {
            text-transform: uppercase;
            color: ${colors.secondRed};
            font-size: 12px;
            font-weight: 500;
            padding-top: 5px;
            letter-spacing: -0.5px;
        }
    }
`;

export default Header;
