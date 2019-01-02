import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    const About = styled.div`
        text-align: center;
        color: blue;
    `;
    const Credits = styled.div`
        text-align: center;
        color: orange;
    `;
    return (
        <div>
            <About>
                <h2>About this Calculator</h2>
                <p>This is a lazy person's Lorem Ipsum. This is a lazy person's Lorem Ipsum. This is a lazy person's Lorem Ipsum.</p>
            </About>
            <Credits>
                <h4>Created by:</h4>
                <ul>
                    <li>Jeanette Fernandez</li>
                    <li>Leigh-Ann Friedel</li>
                    <li>Colin Dismuke</li>
                    <li>Tommy Huynh</li>
                    <li>Chris Honda</li>
                </ul>
            </Credits>
            </div>
    );
};





export default Footer;