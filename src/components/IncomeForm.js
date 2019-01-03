import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import {
  getInputData,
  annualEarningsBefore,
  annualEarningsAfter,
  totalEarnedBefore,
  totalEarnedAfter,
  cumulativeEarnedBefore,
  cumulativeEarnedAfter
} from "../store/actions/rootAction";

import styled from "styled-components";

class IncomeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAge: null,
      retirementAge: null,
      beforeSalary: null,
      afterSalary: null,
      annualRaise: null
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  componentWillReceiveProps(props) {
    if (props.beforeSalary && props.beforeEarnings.length === 0) {
      props.annualEarningsBefore(
        props.beforeSalary,
        props.annualRaise,
        props.yearsOfWork
      );
    }

    if (props.beforeEarnings) {
      props.totalEarnedBefore(props.beforeEarnings);
    }

    if (props.afterSalary && props.afterEarnings.length === 0) {
      props.annualEarningsAfter(
        props.afterSalary,
        props.annualRaise,
        props.yearsOfWork
      );
    }

    if (props.afterEarnings) {
      props.totalEarnedAfter(props.afterEarnings);
    }

    if (
      props.beforeEarnings.length > 0 &&
      props.cumulativeBefore.length === 0
    ) {
      props.cumulativeEarnedBefore(props.beforeEarnings);
    }

    if (props.afterEarnings.length > 0 && props.cumulativeAfter.length === 0) {
      props.cumulativeEarnedAfter(props.afterEarnings);
    }
  }

  submitHandler = e => {
    e.preventDefault();

    this.props.getInputData(this.state);
  };

  render() {
    return (
      <FormContainer onSubmit={this.submitHandler}>
        <Form>
          <div className="form-input-div">
            <FormGroup>
              <Label for="currentAge">Current Age:</Label>
              <Input
                required
                type="number"
                name="currentAge"
                id="currentAge"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="retirementAge">Desired retirement age:</Label>
              <Input
                required
                type="number"
                name="retirementAge"
                id="retirementAge"
                onChange={this.handleChange}
              />
            </FormGroup>
          </div>

          <div className="form-input-div">
            <FormGroup>
              <Label for="beforeSalary">Current annual salary:</Label>
              <Input
                required
                type="number"
                name="beforeSalary"
                id="beforeSalary"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="afterSalary">
                Salary after graduating Lambda School:
              </Label>
              <Input
                required
                type="number"
                name="afterSalary"
                id="afterSalary"
                onChange={this.handleChange}
              />
            </FormGroup>
          </div>

          <div className="form-input-div">
            <FormGroup>
              <Label for="annualRaise">Expected annual raise %:</Label>
              <Input
                type="number"
                name="annualRaise"
                id="annualRaise"
                onChange={this.handleChange}
              />
            </FormGroup>

            <Button>Submit</Button>
          </div>

        </Form>
      </FormContainer>
    );
  }
}

//CSS ------------------------------------------------------------------------------------------------------------------------------------------------------------------

const FormContainer = styled.div`
  display: flex;
  width: 20%;
  padding: 20px;
  border: 1px solid black;

  @media (max-width: 1024px) {
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    margin: 0 auto;
    
    @media (max-width: 1024px) {
      flex-direction: row;
      justify-content: space-around;
    }

    .form-input-div {
      @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 30%;
        height: 100%;
      }
    }

    button {
      margin: 0 auto;
      margin-bottom: 1rem;
    }
  }
`;

const mapStateToProps = state => {
  return {
    yearsOfWork: state.yearsOfWork,
    annualRaise: state.annualRaise,
    beforeSalary: state.beforeSalary,
    afterSalary: state.afterSalary,
    beforeEarnings: state.beforeEarnings,
    afterEarnings: state.afterEarnings,
    cumulativeBefore: state.cumulativeBefore,
    cumulativeAfter: state.cumulativeAfter
  };
};

export default connect(
  mapStateToProps,
  {
    getInputData,
    annualEarningsBefore,
    annualEarningsAfter,
    totalEarnedBefore,
    totalEarnedAfter,
    cumulativeEarnedBefore,
    cumulativeEarnedAfter
  }
)(IncomeForm);
