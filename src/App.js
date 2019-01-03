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
  display: flex;
  max-width: 2000px;
  padding-top: 20px;
`;

export default connect(null)(App);
