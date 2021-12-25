import React, { Component } from "react";
import { BrowserRouter, Switch , Route, Link } from "react-router-dom";
import './App.css';
import LineChart from "./LineChart";
import RadialChart from "./RadialChart";
import ColumnChart from "./ColumnChart";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <header className="App-header">
            <Link
              className="App-link"
              to="/linechart"
            >
              LineChart
            </Link>
            <Link
              className="App-link"
              to="/radialchart"
            >
              RadialChart
            </Link>
            <Link
              className="App-link"
              to="/columnchart"
            >
              ColumnChart
            </Link>
          </header>
          <Switch>
            <Route path="/linechart" component={LineChart} />
            <Route path="/radialchart" component={RadialChart} />
            <Route path="/columnchart" component={ColumnChart} />
            <Route path="/" component={LineChart} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
