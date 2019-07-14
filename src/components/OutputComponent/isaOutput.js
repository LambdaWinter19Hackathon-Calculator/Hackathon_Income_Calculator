import React, { Component } from 'react';
// import { Button } from "reactstrap";
import { connect } from 'react-redux';
import { toggleEarnings, toggleIsa } from '../../store/actions/rootAction';
import {
    OutputContainer,
    Nav,
    NavItem,
    selected,
    DataContainer,
    Wrap,
    Data,
    NumberOutput,
    Button,
} from './style.output';
// import TweetButton from "./TweetButton";

class ISAOutput extends Component {
    render() {
        const {
            tuitionTotal,
            paymentMonths,
            monthlyPayment,
            toggleEarnings,
            toggleIsa,
            afterSalary,
        } = this.props;

        return (
            <OutputContainer>
                <Nav>
                    <NavItem onClick={toggleEarnings}>Earnings</NavItem>
                    <NavItem onClick={toggleIsa} style={selected}>
                        ISA
                    </NavItem>
                </Nav>

                <DataContainer>
                    <Wrap>
                        <h5>Months of Repayment</h5>
                        <Data>
                            <NumberOutput
                                value={
                                    paymentMonths && afterSalary >= 50000
                                        ? paymentMonths
                                        : 0
                                }
                                displayType={'text'}
                            />
                        </Data>
                    </Wrap>

                    <Wrap>
                        <h5>Monthly Payment</h5>
                        <Data>
                            <NumberOutput
                                value={
                                    monthlyPayment && afterSalary >= 50000
                                        ? monthlyPayment
                                        : 0
                                }
                                thousandSeparator={true}
                                displayType={'text'}
                                prefix={'$'}
                            />
                        </Data>
                    </Wrap>

                    <Wrap>
                        <h5>
                            Overall Tuition
                            <br />
                            Over 2 Years
                        </h5>
                        <Data>
                            <NumberOutput
                                value={
                                    tuitionTotal && afterSalary >= 50000
                                        ? tuitionTotal
                                        : 0
                                }
                                thousandSeparator={true}
                                displayType={'text'}
                                prefix={'$'}
                            />
                        </Data>
                    </Wrap>
                </DataContainer>
                <Button
                    href="https://lambdaschool.com/courses/cs/web/"
                    target="_blank"
                >
                    See Our Programs
                </Button>
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
        afterSalary: state.afterSalary,
    };
};

export default connect(
    mapStateToProps,
    { toggleEarnings, toggleIsa }
)(ISAOutput);
