import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import IncomeForm from './components/InputForm/IncomeForm';
import Graph from './components/Graph/Graph';
import DataOutput from './components/OutputComponent/DataOutput';
import ISAOutput from './components/OutputComponent/isaOutput';

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
            <div>
                <Header />
                <ContentContainer>
                    <IncomeForm />
                    <Graph />
                    {output}
                </ContentContainer>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        earningsOutput: state.earningsOutput,
    };
};

//CSS ------------------------------------------------------------------------------------------------------------------------------------------------------------------

const ContentContainer = styled.div`
    background: #faf9f7;
    display: flex;
    justify-content: space-between;
    max-width: 1400px;
    padding: 40px 20px;
    font-family: 'Montserrat', 'Helvetica', sans-serif;
    font-size: 0.9rem;
    margin: 0 auto;

    @media (max-width: 1024px) {
        flex-direction: column;
    }

    @media (max-width: 650px) {
        padding: 20px 10px;
    }
`;

export default connect(mapStateToProps)(App);
