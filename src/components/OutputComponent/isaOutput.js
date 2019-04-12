import React, { Component } from 'react';
// import { Button } from "reactstrap";
import styled from 'styled-components';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import { toggleEarnings, toggleIsa } from '../../store/actions/rootAction';
import {
    OutputContainer,
    Nav,
    NavItem,
    selected,
    Title,
    DataContainer,
    Wrap,
    Data,
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

                <Title>ISA Repayment</Title>

                <DataContainer>
                    <Wrap>
                        <h5>Months of Payment</h5>
                        <Data>
                            <NumberFormat
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
                            <NumberFormat
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
                            Total Tuition
                            <br />
                            Over 2 Years
                        </h5>
                        <Data>
                            <NumberFormat
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
