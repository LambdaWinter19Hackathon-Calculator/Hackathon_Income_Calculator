import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";
import IncomeForm from "./components/IncomeForm";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <IncomeForm />
        <Footer />
      </div>
    );
  }
}

export default connect(null)(App);
