import React, { Component } from "react"
import { connect } from "react-redux"
import NumberFormat from "react-number-format"
import { toggleEarnings, toggleIsa } from "../../store/actions/rootAction"

import "./index.scss"

class EarningsBreakdown extends Component {
    render() {
        const {
            yearsOfWork,
            beforeTotal,
            afterTotal,
            toggleEarnings,
            toggleIsa
        } = this.props

        return (
            <section className="earnings">
                <header>
                    <button className="is-selected" onClick={toggleEarnings}>
                        Earnings
                    </button>
                    <button onClick={toggleIsa}>ISA</button>
                </header>

                <h1>Earnings</h1>

                <div className="earnings-content">
                    <div className="earnings-item">
                        <h2>
                            Pre-Lambda Income <br />
                            Over {yearsOfWork ? yearsOfWork : 0} Years
                        </h2>
                        <p>
                            <NumberFormat
                                value={beforeTotal ? beforeTotal : 0}
                                thousandSeparator={true}
                                displayType={"text"}
                                prefix={"$"}
                            />
                        </p>
                    </div>

                    <div className="earnings-item">
                        <h2>
                            Post-Lambda Income
                            <br />
                            Over {yearsOfWork ? yearsOfWork : 0} Years
                        </h2>
                        <p>
                            <NumberFormat
                                value={afterTotal ? afterTotal : 0}
                                thousandSeparator={true}
                                displayType={"text"}
                                prefix={"$"}
                            />
                        </p>
                    </div>

                    <div className="earnings-item">
                        <h2>
                            Overall Increase
                            <br />
                            Over {yearsOfWork ? yearsOfWork : 0} Years
                        </h2>
                        <p>
                            <NumberFormat
                                value={afterTotal - beforeTotal}
                                thousandSeparator={true}
                                displayType={"text"}
                                prefix={"$"}
                            />
                        </p>

                        {/* <TweetButton tweetMsg={tweetMsg} /> */}
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        beforeTotal: state.beforeTotal,
        afterTotal: state.afterTotal,
        yearsOfWork: state.yearsOfWork,
        tweetMsg: state.tweetMsg
    }
}

export default connect(
    mapStateToProps,
    { toggleEarnings, toggleIsa }
)(EarningsBreakdown)
