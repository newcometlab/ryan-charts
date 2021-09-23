import React, { Component } from "react";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import highchartsMore from "highcharts/highcharts-more.js"
import SolidGaugeChart from 'highcharts/modules/solid-gauge';
highchartsMore(Highcharts);
SolidGaugeChart(Highcharts);

class RadialChart extends Component {
  constructor(props) {
    super(props);

    this.chartOptions = {
        chart: {
            type: 'solidgauge',
        },
    
        title: {
            text: 'Activity',
            style: {
                fontSize: '24px'
            }
        },
    
        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '16px'
            },
            valueSuffix: '%',
            pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
            positioner: function (labelWidth) {
                return {
                    x: (this.chart.chartWidth - labelWidth) / 2,
                    y: (this.chart.plotHeight / 2) + 15
                };
            }
        },
    
        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{ // Track for Move
                outerRadius: '112%',
                innerRadius: '88%',
                backgroundColor: Highcharts.color(Highcharts.getOptions().colors[0])
                    .setOpacity(0.3)
                    .get(),
                borderWidth: 0
            }]
        },
    
        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },
    
        plotOptions: {
            solidgauge: {
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false,
                rounded: true
            }
        },
    
        series: [{
            name: 'Move',
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '112%',
                innerRadius: '88%',
                y: 80
            }]
        }]
    }

  }

  render() {
    return (
        <HighchartsReact
          highcharts={Highcharts}
          options={this.chartOptions}
        />
    );
  }
}

export default RadialChart;
