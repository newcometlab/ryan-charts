import React, { Component } from "react";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.rawData = [
      {
        date: "2020-10-20",
        score: 0,
        note: ""
      },
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

    this.seriesData = this.rawData.map(one => {
      return {
        y: one.score,
        x: Date.UTC(
          parseInt(one.date.substring(0, 4)),
          parseInt(one.date.substring(5, 7)) - 1,
          parseInt(one.date.substring(8, 10))
        ),
        marker: {
          enabled: one.note !== "" ? true : false
        },
        name: one.note
      };
    });
    this.chartOptions = {
      chart: {
        height: 200,
        type: 'spline',
        events: {
          load: function() {
            var chart = this;
            chart.update({
              plotOptions: {
                series: {
                  color: {
                    linearGradient: [0, "-10%", 0, '90%']
                  }
                }
              }
            });
          }
        }
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      yAxis: {
        title: {
          text: ''
        },
        min: -10,
        max: 10
      },
      xAxis: {
        type: 'datetime',
        labels: {
          formatter: function() {
            return Highcharts.dateFormat('%e', this.value);
          }
        },
      },
      plotOptions: {
        spline: {
          lineWidth: 5,
          marker: {
            lineColor: '#fff',
            lineWidth: 3,
            radius: 6
          },
        },
        series: {
          color: {
            linearGradient: [0, 0, 0, 0],
            stops: [
              [0.00, '#57e50b'],
              [0.4, '#defe66'],
              [0.5, '#d7d8ff'],
              [0.6, '#ffdb6d'],
              [1.00, '#ff0000']
            ]
          }

        }
      },
      tooltip: {
        backgroundColor: "transparent",
        borderWidth: 0,
        borderRadius: 0,
        shadow: false,
        padding: 0,
        style: {
          color: "#fff"
        },
        formatter: function() {
          var point_date = new Date(this.point.x);
          var date_str = point_date.toLocaleString('default', {month: 'long'})
                         + " " + point_date.toLocaleString('default', {day: 'numeric'})
                         + "th, " + point_date.toLocaleString('default', {year: 'numeric'});
          return '<div class="bg-tooltip">'
                + '<div style="font-size:14px;">' + date_str + '</div>' 
                + '<div style="font-size:12px;">' +  this.point.name + '</div>' + '</div>';
        },
        useHTML: true
      },  
      series: [{
        data: this.seriesData
      }]
    }

  }

  render() {
    return (
      <div className="app">
        <HighchartsReact
          highcharts={Highcharts}
          options={this.chartOptions}
        />
      </div>
    );
  }
}

export default App;
