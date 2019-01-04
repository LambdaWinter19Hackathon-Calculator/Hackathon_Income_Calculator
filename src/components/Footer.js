import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <div>
            <Wrapper>
                <About>
                    <h2>About this Calculator</h2>
                    <p>Text here</p>
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
padding-top: 60px;
`
const About = styled.div`
text-align: center;
padding-bottom: 30px;
`;

const Credits = styled.div`
text-align: center;
background-color: lightgray;
h4 {
    padding: 20px;
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