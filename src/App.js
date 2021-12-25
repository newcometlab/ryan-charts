import React, { Component } from "react";
import { BrowserRouter, Switch , Route, Link } from "react-router-dom";
import './App.css';
import LineChart from "./LineChart";
import RadialChart from "./RadialChart";
import ColumnChart from "./ColumnChart";
import LineChart2 from "./LineChart2";

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
            <Link
              className="App-link"
              to="/linechart2"
            >
              LineChart2
            </Link>
          </header>
          <Switch>
            <Route path="/linechart" component={LineChart} />
            <Route path="/radialchart" component={RadialChart} />
            <Route path="/columnchart" component={ColumnChart} />
            <Route path="/linechart2" component={LineChart2} />
            <Route path="/" component={ColumnChart} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
