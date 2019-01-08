import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  Tooltip
} from "reactstrap";

import {
  getInputData,
  annualEarningsBefore,
  annualEarningsAfter,
  totalEarnedBefore,
  totalEarnedAfter,
  cumulativeEarnedBefore,
  cumulativeEarnedAfter,
  reset,
  tweetMsg,
  isaCalc
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
      annualRaise: null,
      tooltipOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  };

  componentWillReceiveProps(props) {
    if (props.beforeSalary && props.beforeEarnings.length === 0) {
      props.annualEarningsBefore(
        props.beforeSalary,
        props.annualRaise,
        props.yearsOfWork
      );

      props.annualEarningsAfter(
        props.afterSalary,
        props.annualRaise,
        props.yearsOfWork
      );

      props.isaCalc(props.afterSalary);
    }

    if (props.beforeEarnings && props.cumulativeBefore.length === 0) {
      props.totalEarnedBefore(props.beforeEarnings);
      props.totalEarnedAfter(props.afterEarnings);
      props.cumulativeEarnedBefore(props.beforeEarnings);
      props.cumulativeEarnedAfter(props.afterEarnings);
    }

    if (props.beforeTotal) {
      props.tweetMsg(props.yearsOfWork, props.beforeTotal, props.afterTotal);
    }
  }

  submitHandler = e => {
    e.preventDefault();
    this.props.getInputData(this.state, this.props.reset);
  };

  render() {
    const classes = 'tooltip-inner'

    return (
      <FormContainer onSubmit={this.submitHandler}>
        <Form>
          <div className="form-input-div">
            <FormGroup>
              <Label for="currentAge">Current Age</Label>
              <InputGroup>
                <Input
                  required
                  type="number"
                  name="currentAge"
                  id="currentAge"
                  onChange={this.handleChange}
                />
                <InputGroupAddon addonType="append">Years</InputGroupAddon>
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <Label for="retirementAge">Retirement Age</Label>
              <InputGroup>
                <Input
                  required
                  type="number"
                  name="retirementAge"
                  id="retirementAge"
                  onChange={this.handleChange}
                />
                <InputGroupAddon addonType="append">Years</InputGroupAddon>
              </InputGroup>
            </FormGroup>
          </div>

          <div className="form-input-div">
            <FormGroup>
              <Label for="beforeSalary">Salary Pre-Lambda</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                <Input
                  required
                  type="number"
                  name="beforeSalary"
                  id="beforeSalary"
                  onChange={this.handleChange}
                />
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <Label for="afterSalary">Salary Post-Lambda</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                <Input
                  required
                  type="number"
                  name="afterSalary"
                  id="afterSalary"
                  onChange={this.handleChange}
                />
              </InputGroup>
            </FormGroup>
          </div>

          <div className="form-input-div">
            <FormGroup>
              <Label for="annualRaise">Expected Annual Raise</Label>
              <p href="#" id="TooltipExample">tooltip</p>
        <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle}>
          Hello world!
        </Tooltip>

              <InputGroup>
                <Input
                  type="number"
                  name="annualRaise"
                  id="annualRaise"
                  onChange={this.handleChange}
                />
                <InputGroupAddon addonType="append">%</InputGroupAddon>
              </InputGroup>
            </FormGroup>
            <div className="button-div">
              <Button className="submit">Submit</Button>
              <Button type="reset" className="reset" onClick={this.props.reset}>
                Reset
              </Button>
            </div>
          </div>
        </Form>
      </FormContainer>
    );
  }
}

//CSS ------------------------------------------------------------------------------------------------------------------------------------------------------------------

const FormContainer = styled.div`
  background: #ffffff;
  display: flex;
  width: 18%;
  padding: 20px;
  border: 1px solid #b8b2a7;
  border-radius: 5px;

  @media (max-width: 1024px) {
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 1024px) {
      flex-direction: row;
      justify-content: space-around;
    }

    @media (max-width: 650px) {
      flex-direction: column;
    }

    .form-input-div {
      height: 33%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 30%;
        height: 100%;
      }

      @media (max-width: 650px) {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-end;
        padding-bottom: 10px;
        width: 100%;
      }
    }

    .form-group {
      @media (max-width: 650px) {
        width: 48%;
      }
    }

    .input-group-text {
      background: #faf9f7;
    }

    .button-div {
      display: flex;
      flex-direction: column;

      @media (max-width: 650px) {
        width: 48%;
      }
    }

    button {
      width: 100%;
      margin-bottom: 10px;
      border: 0;
    }

    .submit {
      background: #cb6e17;

      &:active {
        background: #b8b2a7 !important;
      }
    }

    .reset {
      background: #a0021e;

      &:active {
        background: #b8b2a7 !important;
      }

      @media (max-width: 1024px) {
        margin-bottom: 17px;
      }
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
    cumulativeAfter: state.cumulativeAfter,
    beforeTotal: state.beforeTotal,
    afterTotal: state.afterTotal
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
    cumulativeEarnedAfter,
    reset,
    tweetMsg,
    isaCalc
  }
)(IncomeForm);
