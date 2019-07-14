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
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: 0,
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({
            windowWidth: window.innerWidth
        })
    }
    render() {
        console.log(this.state.windowWidth)
        const { earningsOutput } = this.props;
        let output;
        if (earningsOutput) {
            output = <DataOutput />;
        } else {
            output = <ISAOutput />;
        }

        let graphVisibility = this.state.windowWidth <= 650 ? null : <Graph />
        
        return (
            <AppContainer>
                <Container>
                    <Header />
                    <BodyContainer>
                        <IncomeForm />
                        {graphVisibility}
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
