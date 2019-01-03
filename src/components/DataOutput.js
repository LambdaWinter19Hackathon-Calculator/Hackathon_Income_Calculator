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
               
                <Button>Export</Button>
            </OutputContainer>
        );
    };
};

//CSS ------------------------------------------------------------------------------------------------------------------------------------------------------------------

const OutputContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 250px;
    width: 20%;
    padding: 20px;
    border: 1px solid black;
    margin: 0 20px;
`;

const Wrap = styled.div`
    line-height: 0.5;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Data = styled.p`
    padding: 10px 0 50px 0;
    font-weight: bold;
`;

export default DataOutput;