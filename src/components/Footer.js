import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <div>
            <Wrapper>
                <About>
                    <h2>About this Calculator</h2>
                    <p>This calculator is intended to give a visual representation of the impact higher income can have on a person's life.</p>
                    <p>It does not take into consideration income from other investments, nor does it constitute any guarantees.</p>
                </About>
                <Credits>
                    <h4>Created by</h4>
                    <List>
                        <Items><a href="https://github.com/jeanfern5">Jeanette Fernandez</a></Items>
                        <Items><a href="https://github.com/lafriedel">Leigh-Ann Friedel</a></Items>
                        <Items><a href="https://github.com/cpdis">Colin Dismuke</a></Items>
                        <Items><a href="https://github.com/tommaay">Tommy Huynh</a></Items>
                        <Items><a href="https://github.com/honda0306">Chris Honda</a></Items>
                    </List>
                    <p>Part of Lambda School Hackathon 2019©</p>
                </Credits>
            </Wrapper>
            </div>
    );
};

//CSS ------------------------------------------------------------------------------------------------------------------------------------------------------------------


const Wrapper = styled.div`
background: #FAF9F7;
display: flex;
flex-direction: column;
padding-top: 20px;
font-family: 'Montserrat', 'Helvetica', sans-serif;
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
    font-family: 'Open Sans', 'Helvetica', sans-serif;
    padding-bottom: 12px;
}
`;

const Credits = styled.div`
text-align: center;
background-color: #E8E6E1;
font-size: 0.8rem;

h4 {
    padding: 20px;
    font-size: 1rem;
    font-family: 'Open Sans', 'Helvetica', sans-serif;
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