import React, { Component } from "react";
import { Button } from "reactstrap";
import styled from "styled-components";
import { connect } from "react-redux";

class DataOutput extends Component {

  render() {
    const { yearsOfWork, beforeTotal, afterTotal } = this.props;

    return (
      <OutputContainer>
        <Wrap>
          <p>Pre-Lambda Income</p>
          <p>Over {yearsOfWork ? yearsOfWork : 0} Years</p>
          <Data>$ {beforeTotal ? beforeTotal : 0}</Data>
        </Wrap>

        <Wrap>
          <p>Post-Lambda Income</p>
          <p>Over {yearsOfWork ? yearsOfWork : 0} Years</p>
          <Data>$ {afterTotal ? afterTotal : 0}</Data>
        </Wrap>

        <Wrap>
          <p>Overall Increase</p>
          <p>Over {yearsOfWork ? yearsOfWork : 0} Years</p>
          <Data>$ {afterTotal - beforeTotal}</Data>
        </Wrap>

        <Button>Export</Button>
      </OutputContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    beforeTotal: state.beforeTotal,
    afterTotal: state.afterTotal,
    yearsOfWork: state.yearsOfWork
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

export default connect(mapStateToProps)(DataOutput);
