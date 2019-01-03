import React, { Component } from "react";
import { Button } from "reactstrap";
import styled from "styled-components";

class DataOutput extends Component {
    render() {
        return (
            <OutputContainer>
                <Wrap>
                    <p>Pre-Lambda Income</p>
                    <p>Over X Years</p>
                    <Data>$XXX,XXX.XX</Data>
                </Wrap>

                <Wrap>
                    <p>Post-Lambda Income</p>
                    <p>Over X Years</p>
                    <Data>$XXX,XXX.XX</Data>
                </Wrap>

                <Wrap>
                    <p>Overall Increase</p>
                    <p>Over X Years</p>
                    <Data>$XXX,XXX.XX</Data>
                </Wrap>

               <Wrap>
                    <Button>Export</Button>
               </Wrap>

            </OutputContainer>
        );
    };
};

//CSS ------------------------------------------------------------------------------------------------------------------------------------------------------------------

const OutputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    padding: 20px;
    border: 1px solid black;
    justify-content: space-around;

    @media (max-width: 1024px) {
        flex-direction: row;
        width: 100%;
        min-height: 150px;
        justify-content: space-around;
        align-items: center;
    }
`;

const Wrap = styled.div`
    line-height: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media (max-width: 1024px) {
        width: 25%;
    }
`;

const Data = styled.p`
padding-top: 10px;
    font-weight: bold;
`;

export default DataOutput;