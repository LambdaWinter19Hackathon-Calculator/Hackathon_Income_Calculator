import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    const Wrapper = styled.div`
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
    `
    const About = styled.div`
        text-align: center;
    `;
    const Credits = styled.div`
        text-align: center;
        background-color: lightgray;
        h4 {
            padding-top: 10px;
        }
    `;
    const List = styled.ul`
        /* column-count: 3;
        column-width: 300px; */
        display: flex;
        justify-content: center;
        list-style-type: none;
    `
    const Items = styled.li`
        padding: 0 20px 20px 20px;
    `
    return (
        <div>
            <Wrapper>
                <About>
                    <h2>About this Calculator</h2>
                    <p>Text here</p>
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
                </Credits>
            </Wrapper>
            </div>
    );
};





export default Footer;