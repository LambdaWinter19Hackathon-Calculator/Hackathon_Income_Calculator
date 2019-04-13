import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import IncomeForm from './components/InputForm/IncomeForm';
import Graph from './components/Graph/Graph';
import GraphLegend from './components/Graph/GraphLegend';
import DataOutput from './components/OutputComponent/DataOutput';
import ISAOutput from './components/OutputComponent/isaOutput';
import { AppContainer, Container, BodyContainer } from './style/style.app';

class App extends Component {
    render() {
        const { earningsOutput } = this.props;
        let output;
        if (earningsOutput) {
            output = <DataOutput />;
        } else {
            output = <ISAOutput />;
        }
        return (
            <AppContainer>
                <Container>
                    <Header />
                    <BodyContainer>
                        <IncomeForm />
                        <Graph />
                        {output}
                        <GraphLegend />
                    </BodyContainer>
                </Container>
                <Footer />
            </AppContainer>
        );
    }
}

const mapStateToProps = state => {
    return {
        earningsOutput: state.earningsOutput,
    };
};

export default connect(mapStateToProps)(App);
