import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import IncomeForm from "./components/IncomeForm";
import Graph from "./components/Graph";
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <ContentContainer>
            <IncomeForm />
            <Graph />
          </ContentContainer>
        <Footer />
      </div>
    );
  }
}

const ContentContainer = styled.div`
    display: flex;
`;

export default App;