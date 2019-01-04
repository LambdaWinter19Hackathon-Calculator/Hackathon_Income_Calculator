import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <Title>
            <h1>Income Calculator</h1>
        </Title>
    );
};

//CSS ------------------------------------------------------------------------------------------------------------------------------------------------------------------
const Title = styled.div`
text-align: center;
background: #A0021E;
padding: 25px;

h1 {
    margin-bottom: 0;
}
`;


export default Header;