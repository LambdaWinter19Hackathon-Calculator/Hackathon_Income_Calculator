import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <div>
            <Wrapper>
                <About>
                    <h2>About this Calculator</h2>
                    <p>This calculator is intended to provide a visual representation of the financial benefits Lambda School can deliver.</p>
                    <p>It does not consider fluxuations salary, nor does it factor variable income from outside investments.</p>
                </About>
                <Credits>
                    <h4>Created by:</h4>
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
padding-bottom: 20px;
h2 {
    padding-bottom: 10px;
}
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
`;
const Items = styled.li`
padding: 0 20px;
`;




export default Footer;