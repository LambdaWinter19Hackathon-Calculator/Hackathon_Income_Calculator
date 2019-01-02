import React from 'react';
import styled from 'styled-components';

const Header = () => {
    const Title = styled.div`
        text-align: center;
        color: red;
    `;
    return (
        <Title>
            <h1>Income Calculator</h1>
        </Title>
    );
};




export default Header;