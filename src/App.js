import React, { Component } from 'react';
<<<<<<< HEAD
// import IncomeForm from "./components/IncomeForm";
import Graph from "./components/Graph";
import '../node_modules/react-vis/dist/style.css';
=======
import Header from './components/Header';
import Footer from './components/Footer';
import IncomeForm from "./components/IncomeForm";
>>>>>>> 0b31618d190809a18741d86370743c867dc9b26f

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        {/* <IncomeForm /> */}
        <Graph />
=======
      <div>
        <Header />
          <IncomeForm />
        <Footer />
>>>>>>> 0b31618d190809a18741d86370743c867dc9b26f
      </div>
    );
  }
}

export default App;