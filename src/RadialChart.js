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
            plotBackgroundImage: '../images/man.png'
          },
          title: null,
          pane: {
            size: '80%',
            center: ["50%", "50%"],
            startAngle: -130,
            endAngle: 130,
            background: {
              borderWidth: 54,
              backgroundColor: '#8b8ca5',
              shape: 'arc',
              borderColor: '#8b8ca5',
              outerRadius: '85%',
              innerRadius: '85%'
            }
          },
          yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: [],
            stops: [
              [0.1, '#fe5d54'],
              [0.9, '#ff9700']
            ],
          },
          tooltip: {
            enabled: false
          },
          plotOptions: {
            solidgauge: {
              borderWidth: 0,
              radius: '95%',
              innerRadius: '75%',
              linecap: 'round',
              rounded: true,
              dataLabels: {
                y: 100,
                borderWidth: 0,
                useHTML: true
              }
            }
          },
          credits: {
              enabled:false
          },
          series: [{
            name: 'overall wellbeing',
            data: [70],
            dataLabels: {
              format: '<div style="text-align:center;font-size:30px;color:#333951;line-height: 1.1;"><div style="text-align:center;">Overall</div style="text-align:center;"><div>Wellbeing</div></div>'
            }
          }]
    }

    this.chartCallback = (chart) => {
        var y = chart.series[0].data[0].y;
        for (var i = y; i >= 0; i = i - (y / 80)) {
          chart.addSeries({
            data: [{
              y: i,
            }],
            stickyTracking: false,
            enableMouseTracking: false
          }, false)
        }
        chart.redraw();
        Highcharts.each(chart.series, function(s) {
          s.update({
            borderColor: s.data[0].color
          }, false);
        });
        chart.redraw();
      }

  }

    componentDidMount() {
        console.log(document);
        let svg = document.getElementsByTagName('svg');
        if (svg.length > 0) {
          let path = svg[0].getElementsByTagName('path');
          if (path.length > 1) {
            path[0].setAttributeNS(null, 'stroke-linejoin', 'round');
          }
        }
    }

  render() {
    return (
        <div
        style={{width:"400px", height:"400px", margin: "0 auto"}}>            
            <HighchartsReact
              highcharts={Highcharts}
              options={this.chartOptions}
              callback={this.chartCallback}
            />
        </div>
    );
  }
}

export default RadialChart;
