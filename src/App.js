import React, { Component } from "react";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
  title: {
    text: 'My chart'
  },
  series: [{
    data: [1, 2, 3]
  }]
}

class App extends Component {
  constructor(props) {
    super(props);

    this.seriesData = [
      {
        date: "2020-10-21",
        score: 0,
        note: ""
      },
      {
        date: "2020-10-22",
        score: 10,
        note: "positive event established"
      },
      {
        date: "2020-10-23",
        score: 0,
        note: ""
      },
      {
        date: "2020-10-24",
        score: -1,
        note: "some other event"
      },
      {
        date: "2020-10-25",
        score: -5,
        note: "some other event"
      },
      {
        date: "2020-10-26",
        score: 8,
        note: "positive event established"
      },
      {
        date: "2020-10-27",
        score: 0,
        note: ""
      },
      {
        date: "2020-10-28",
        score: -10,
        note: "critical event established"
      },
      {
        date: "2020-10-29",
        score: 0,
        note: ""
      },
      {
        date: "2020-10-30",
        score: 0,
        note: ""
      },
      {
        date: "2020-10-31",
        score: 6,
        note: "some other event"
      },
      {
        date: "2020-11-01",
        score: 0,
        note: ""
      },
      {
        date: "2020-11-02",
        score: 0,
        note: ""
      },
      {
        date: "2020-11-03",
        score: -5,
        note: "some other event"
      },
      {
        date: "2020-11-04",
        score: 0,
        note: ""
      },
    ];

  }

  render() {
    return (
      <div className="app">
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </div>
    );
  }
}

export default App;
