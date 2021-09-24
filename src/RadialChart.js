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

    this.seriesData = 67;
    let chartImage = null;
    let chartLabel1 = null;
    let chartLabel2 = null;
    this.chartOptions = {
        chart: {
            type: 'solidgauge',
            backgroundColor: 'transparent',
            margin: 0,
            spacing: 0,
            events: {
              load: function () {
                let plot_scale = this.plotWidth > this.plotHeight ? this.plotHeight : this.plotWidth;
                chartImage = this.renderer.image('../images/man.png', (this.plotWidth - plot_scale) / 2, (this.plotHeight - plot_scale) / 2, plot_scale, plot_scale).add();
                chartLabel1 = this.renderer.text('Overall', (this.plotWidth / 2 - plot_scale * 0.14), (this.plotHeight + plot_scale * 0.7) / 2)
                  .css({
                    fontSize: plot_scale * 0.08 + 'px',
                    color: '#333951',
                    fontWeight: '900'
                  })
                  .add();
                chartLabel2 = this.renderer.text('Wellbeing', (this.plotWidth / 2 - plot_scale * 0.19), (this.plotHeight + plot_scale * 0.7) / 2 + plot_scale * 0.1)
                  .css({
                    fontSize: plot_scale * 0.08 + 'px',
                    color: '#333951',
                    fontWeight: '900'
                  })
                  .add();
              },
              redraw: function() {
                if (chartImage !== null) {
                  let plot_scale = this.plotWidth > this.plotHeight ? this.plotHeight : this.plotWidth;
                  chartImage.destroy();
                  chartImage = this.renderer.image('../images/man.png', (this.plotWidth - plot_scale) / 2, (this.plotHeight - plot_scale) / 2, plot_scale, plot_scale).add();
                  chartLabel1.destroy();
                  chartLabel1 = this.renderer.text('Overall', (this.plotWidth / 2 - plot_scale * 0.14), (this.plotHeight + plot_scale * 0.7) / 2)
                    .css({
                      fontSize: plot_scale * 0.08 + 'px',
                      color: '#333951',
                      fontWeight: '900'
                    })
                    .add();
                  chartLabel2.destroy();
                  chartLabel2 = this.renderer.text('Wellbeing', (this.plotWidth / 2 - plot_scale * 0.19), (this.plotHeight + plot_scale * 0.7) / 2 + plot_scale * 0.1)
                    .css({
                      fontSize: plot_scale * 0.08 + 'px',
                      color: '#333951',
                      fontWeight: '900'
                    })
                    .add();
                }
              }
            }
          },
          title: null,
          pane: {
            size: '80%',
            center: ["50%", "50%"],
            startAngle: -130,
            endAngle: 130,
            background: {
              borderWidth: "12%",
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
                enabled: false
              }
            }
          },
          credits: {
              enabled:false
          },
          series: [{
            name: 'overall wellbeing',
            data: [this.seriesData]
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
        <div className="radial-chart">            
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
