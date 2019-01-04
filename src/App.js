import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import IncomeForm from "./components/IncomeForm";
import Graph from "./components/Graph";
import DataOutput from "./components/DataOutput";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ContentContainer>
          <IncomeForm />
          <Graph />
          <DataOutput />
        </ContentContainer>
        <Footer />
      </div>
    );
  };
};

//CSS ------------------------------------------------------------------------------------------------------------------------------------------------------------------

const ContentContainer = styled.div`
background: #FAF9F7;
  display: flex;
  max-width: 2000px;
  padding: 40px 20px;
  font-family: 'Montserrat', 'Helvetica', sans-serif;
  font-size: 0.9rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 650px) {
    padding: 20px 10px;
  }
`;

export default connect(null)(App);
