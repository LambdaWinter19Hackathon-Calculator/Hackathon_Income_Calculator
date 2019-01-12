import React, { Component } from "react";
// import { Button } from "reactstrap";
import styled from "styled-components";
import { connect } from "react-redux";
import NumberFormat from "react-number-format";
import { toggleEarnings, toggleIsa } from "../store/actions/rootAction";

// import TweetButton from "./TweetButton";

class ISAOutput extends Component {
  render() {
    const {
      tuitionTotal,
      paymentMonths,
      monthlyPayment,
      toggleEarnings,
      toggleIsa
    } = this.props;

    return (
      <OutputContainer>
        <Nav>
          <NavItem onClick={toggleEarnings}>Earnings</NavItem>
          <NavItem onClick={toggleIsa} style={selected}>
            ISA
          </NavItem>
        </Nav>

        <Title>ISA Repayment</Title>

        <Wrap>
          <h5>Months of Payment</h5>
          <h5>Over No More than 2 Years</h5>
          <Data>
            <NumberFormat
              value={paymentMonths ? paymentMonths : 0}
              displayType={"text"}
            />
          </Data>
        </Wrap>

        <Wrap>
          <h5>Monthly Payment</h5>
          <Data>
            <NumberFormat
              value={monthlyPayment ? monthlyPayment : 0}
              thousandSeparator={true}
              displayType={"text"}
              prefix={"$"}
            />
          </Data>
        </Wrap>

        <Wrap>
          <h5>Total Tuition</h5>
          <h5>Over 2 Years</h5>
          <Data>
            <NumberFormat
              value={tuitionTotal ? tuitionTotal : 0}
              thousandSeparator={true}
              displayType={"text"}
              prefix={"$"}
            />
          </Data>
        </Wrap>
      </OutputContainer>
    );
  }
}

const mapStateToProps = state => {
  console.log("tuitionTotal", state.tuitionTotal);
  return {
    paymentMonths: state.paymentMonths,
    monthlyPayment: state.monthlyPayment,
    tuitionTotal: state.tuitionTotal
  };
};

//CSS ------------------------------------------------------------------------------------------------------------------------------------------------------------------

const OutputContainer = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  width: 18%;
  padding: 20px;
  border: 1px solid #b8b2a7;
  border-radius: 5px;
  justify-content: space-around;

  @media (max-width: 1024px) {
    flex-direction: row;
    width: 100%;
    min-height: 150px;
    justify-content: space-around;
    align-items: stretch;
  }

  @media (max-width: 600px) {
    width: 98%;
    flex-direction: column;
    margin: 0 auto;
    padding: 40px 20px;
  }

  /* .export {
      align-self: center;
      width: 100%;
      background: #cb6e17;
      border: 0;

      @media (max-width: 1024px) {
        width: 22%;
      }

      @media (max-width: 650px) {
        margin-top: 20px;
      }
    } */
`;

const Wrap = styled.div`
  line-height: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 1024px) {
    width: 25%;
    justify-content: space-between;
  }

  @media (max-width: 600px) {
    width: 100%;
    padding-bottom: 25px;
  }

  h5 {
    font-size: 1rem;

    @media (max-width: 600px) {
      font-size: 1.25rem;
    }
  }
`;

const Data = styled.p`
  padding-top: 10px;
  font-weight: 700;
  font-size: 1.4rem;

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

const Title = styled.h4`
  margin-bottom: -20px;
  text-align: center;
  font-weight: bold;
`;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  vertical-align: center;
  margin-bottom: -30px;
`;

const NavItem = styled.button`
  border: 1px solid #95041c;
  color: #95041c;
  font-weight: bold;
  padding: 5px 0px;
  width: 45%;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
`;

const selected = {
  background: "#95041c",
  color: "white"
};

export default connect(
  mapStateToProps,
  { toggleEarnings, toggleIsa }
)(ISAOutput);
