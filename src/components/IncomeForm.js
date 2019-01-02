import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class IncomeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAge: null,
      retirementAge: null,
      beforeIncome: null,
      afterIncome: null,
      annualRaise: null
    };
  }
  render() {
    return (
      <div className="form-container">
        <Form>
          <FormGroup>
            <Label for="currentAge">Current Age:</Label>
            <Input required type="number" name="currentAge" id="currentAge" />
          </FormGroup>

          <FormGroup>
            <Label for="retirementAge">Desired retirement age:</Label>
            <Input
              required
              type="number"
              name="retirementAge"
              id="retirementAge"
            />
          </FormGroup>

          <FormGroup>
            <Label for="beforeIncome">Current annual salary:</Label>
            <Input
              required
              type="number"
              name="beforeIncome"
              id="beforeIncome"
            />
          </FormGroup>

          <FormGroup>
            <Label for="afterIncome">
              Salary after graduating Lambda School:
            </Label>
            <Input required type="number" name="afterIncome" id="afterIncome" />
          </FormGroup>

          <FormGroup>
            <Label for="annualRaise">Expected annual raise %:</Label>
            <Input type="number" name="annualRaise" id="annualRaise" />
          </FormGroup>

          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default IncomeForm;
