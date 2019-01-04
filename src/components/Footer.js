import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <div>
            <Wrapper>
                <About>
                    <h2>About this Calculator</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </About>
                <Credits>
                    <h4>Created by</h4>
                    <List>
                        <Items>Jeanette Fernandez</Items>
                        <Items>Leigh-Ann Friedel</Items>
                        <Items>Colin Dismuke</Items>
                        <Items>Tommy Huynh</Items>
                        <Items>Chris Honda</Items>
                    </List>
                    <p>Part of Lambda School Hackathon 2019</p>
                </Credits>
            </Wrapper>
            </div>
    );
};

//CSS ------------------------------------------------------------------------------------------------------------------------------------------------------------------


const Wrapper = styled.div`
display: flex;
flex-direction: column;
padding-top: 20px;
`
const About = styled.div`
text-align: center;
padding-bottom: 30px;
width: 50%;
margin: 0 auto;

@media (max-width: 1024px) {
    width: 65%;
}

@media (max-width: 650px) {
    width: 85%;
}

h2 {
    font-size: 1.4rem;
}
`;

const Credits = styled.div`
text-align: center;
background-color: lightgray;
h4 {
    padding: 20px;
    font-size: 1.1rem;
}
`;
const List = styled.ul`
/* column-count: 3;
column-width: 300px; */
display: flex;
justify-content: center;
list-style-type: none;
padding: 0;

@media (max-width: 650px) {
    flex-direction: column;
}

`;
const Items = styled.li`
padding: 0 10px;
`;




export default Footer;