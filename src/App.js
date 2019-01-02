import React, { Component } from 'react';
// import IncomeForm from "./components/IncomeForm";
import Graph from "./components/Graph";
import '../node_modules/react-vis/dist/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <IncomeForm /> */}
        <Graph />
      </div>
    );
  }
}

export default App;