import React, { Component } from 'react';
// import { Button } from "reactstrap";
import styled from 'styled-components';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import { toggleEarnings, toggleIsa } from '../store/actions/rootAction';

// import TweetButton from "./TweetButton";

class ISAOutput extends Component {
  render() {
    const {
      tuitionTotal,
      paymentMonths,
      monthlyPayment,
      toggleEarnings,
      toggleIsa,
      afterSalary
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

        <DataContainer>
          <Wrap>
            <h5>Months of Payment</h5>
            <Data>
              <NumberFormat
                value={paymentMonths ? paymentMonths : 0}
                displayType={'text'}
              />
            </Data>
          </Wrap>

          <Wrap>
            <h5>Monthly Payment</h5>
            <Data>
              <NumberFormat
                value={
                  monthlyPayment && afterSalary >= 50000 ? monthlyPayment : 0
                }
                thousandSeparator={true}
                displayType={'text'}
                prefix={'$'}
              />
            </Data>
          </Wrap>

          <Wrap>
            <h5>
              Total Tuition
              <br />
              Over 2 Years
            </h5>
            <Data>
              <NumberFormat
                value={tuitionTotal ? tuitionTotal : 0}
                thousandSeparator={true}
                displayType={'text'}
                prefix={'$'}
              />
            </Data>
          </Wrap>
        </DataContainer>
      </OutputContainer>
    );
  }
}

const mapStateToProps = state => {
  console.log('tuitionTotal', state.tuitionTotal);
  return {
    paymentMonths: state.paymentMonths,
    monthlyPayment: state.monthlyPayment,
    tuitionTotal: state.tuitionTotal,
    afterSalary: state.afterSalary
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
  justify-content: flex-start;
  h5 {
    line-height: 1.6;
  }
  @media (max-width: 1024px) {
    width: 100%;
    min-height: 150px;
    justify-content: space-around;
    align-items: stretch;
  }
  @media (max-width: 600px) {
    width: 98%;
    flex-direction: column;
    margin: 0 auto;
    padding: 20px;
    padding-bottom: 0;
  }
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80%;

  @media (max-width: 1024px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    align-items: stretch;
  }
  @media (max-width: 600px) {
    width: 90%;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    padding: 10px;
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
  text-align: center;
  font-weight: bold;
  color: #95041c;
  text-shadow: -1px 0px 0px;

  @media (max-width: 1024px) {
    margin-bottom: 25px;
    font-size: 1.8rem;
  }
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  vertical-align: center;
  margin-bottom: 30px;
  padding-top: 15px;

  @media (min-width: 1024px) {
    @media (max-width: 1055px) {
      flex-wrap: wrap;
    }
  }

  @media (max-width: 1024px) {
    margin-bottom: 20px;
  }
  @media (max-width: 600px) {
    margin-bottom: 30px;
  }
`;

const NavItem = styled.button`
  border: 1px solid #95041c;
  color: #95041c;
  font-weight: bold;
  padding: 5px 0px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;

  @media (min-width: 1155px) {
    width: 45%;
  }

  @media (min-width: 1025px) {
    @media (max-width: 1154px) {
      width: 70%;
    }
  }

  @media (max-width: 1024px) {
    width: 140px;
  }
`;

const selected = {
  background: '#95041c',
  color: 'white'
};

export default connect(
  mapStateToProps,
  { toggleEarnings, toggleIsa }
)(ISAOutput);
