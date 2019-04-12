import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo_color.png';

const Header = () => {
    return (
        <Title>
            <img src={logo} alt="Compound logo in Lambda School red" />
        </Title>
    );
};

//CSS ------------------------------------------------------------------------------------------------------------------------------------------------------------------
const Title = styled.div`
    display: flex;
    justify-content: center;
    background-color: #e8e6e1;
    padding: 25px;
    max-height: 125px;

    img {
        width: 300px;
    }
`;

export default Header;
