import React, { Component } from "react"
import { connect } from "react-redux"
import NumberFormat from "react-number-format"
import { toggleEarnings, toggleIsa } from "../../store/actions/rootAction"

import "./index.scss"

class AgreementBreakdown extends Component {
    render() {
        const {
            tuitionTotal,
            paymentMonths,
            monthlyPayment,
            toggleEarnings,
            toggleIsa,
            afterSalary
        } = this.props

        return (
            <section className="agreement">
                <header>
                    <button onClick={toggleEarnings}>Earnings</button>
                    <button className="is-selected" onClick={toggleIsa}>
                        ISA
                    </button>
                </header>

                <h1>ISA Repayment</h1>

                <div className="agreement-content">
                    <div className="agreement-item">
                        <h2>Months of Payment</h2>
                        <p>
                            <NumberFormat
                                value={
                                    paymentMonths && afterSalary >= 50000
                                        ? paymentMonths
                                        : 0
                                }
                                displayType={"text"}
                            />
                        </p>
                    </div>

                    <div className="agreement-item">
                        <h2>Monthly Payment</h2>
                        <p>
                            <NumberFormat
                                value={
                                    monthlyPayment && afterSalary >= 50000
                                        ? monthlyPayment
                                        : 0
                                }
                                thousandSeparator={true}
                                displayType={"text"}
                                prefix={"$"}
                            />
                        </p>
                    </div>

                    <div className="agreement-item">
                        <h2>
                            Total Tuition
                            <br />
                            Over 2 Years
                        </h2>
                        <p>
                            <NumberFormat
                                value={
                                    tuitionTotal && afterSalary >= 50000
                                        ? tuitionTotal
                                        : 0
                                }
                                thousandSeparator={true}
                                displayType={"text"}
                                prefix={"$"}
                            />
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        paymentMonths: state.paymentMonths,
        monthlyPayment: state.monthlyPayment,
        tuitionTotal: state.tuitionTotal,
        afterSalary: state.afterSalary
    }
}

export default connect(
    mapStateToProps,
    { toggleEarnings, toggleIsa }
)(AgreementBreakdown)
