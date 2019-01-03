import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import {
  getInputData,
  annualEarningsBefore
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

  submitHandler = e => {
    e.preventDefault();

    this.props.getInputData(this.state);
    this.props.annualEarningsBefore(
      this.state.beforeSalary,
      this.props.annualRaise,
      this.props.yearsOfWork
    );
  };

  render() {
    return (

      <FormContainer onSubmit={this.submitHandler}>
        <Form>

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
        </Form>
      </FormContainer>
    );
  };
};

//CSS ------------------------------------------------------------------------------------------------------------------------------------------------------------------

const FormContainer = styled.div`
  display: flex;
  width: 20%;
  padding: 20px;
  border: 1px solid black;
`;

const mapStateToProps = state => {
  // console.log(state.yearsOfWork);
  return {
    yearsOfWork: state.yearsOfWork,
    annualRaise: state.annualRaise
  };
};

export default connect(
  mapStateToProps,
  { getInputData, annualEarningsBefore }
)(IncomeForm);
