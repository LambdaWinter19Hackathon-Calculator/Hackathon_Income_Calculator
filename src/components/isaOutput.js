import React, { Component } from "react";
// import { Button } from "reactstrap";
import styled from "styled-components";
import { connect } from "react-redux";
import NumberFormat from "react-number-format";
// import TweetButton from "./TweetButton";

class ISAOutput extends Component {
  render() {
    const { tuitionTotal, paymentMonths, monthlyPayment } = this.props;

    return (
      <OutputContainer>
        <Wrap>
          <h4>ISA Repayment</h4>
        </Wrap>
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

export default connect(mapStateToProps)(ISAOutput);
