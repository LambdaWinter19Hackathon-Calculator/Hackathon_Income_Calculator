import React, { Component } from "react"
import { connect } from "react-redux"

import Header from "../Header"
import Footer from "../Footer"
import IncomeForm from "../IncomeForm"
import Graph from "../Graph"
import EarningsBreakdown from "../EarningsBreakdown"
import ISAOutput from "../isaOutput"

import "./index.scss"

class App extends Component {
    render() {
        const { earningsOutput } = this.props
        const Output = earningsOutput ? <EarningsBreakdown /> : <ISAOutput />
        return (
            <>
                <Header />
                <main className="content">
                    <IncomeForm />
                    <Graph />
                    {Output}
                </main>
                <Footer />
            </>
        )
    }
}

const mapStateToProps = ({ earningsOutput }) => ({ earningsOutput })
export default connect(mapStateToProps)(App)
