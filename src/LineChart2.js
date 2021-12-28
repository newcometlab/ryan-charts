import React, {Component} from "react";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

class LineChart2 extends Component {
	constructor(props) {
		super(props);

		const rawData = [
			{
			  "title": "Mon 06",
			  "value": 100
			},
			{
			  "title": "Mon 13",
			  "value": 260
			},
			{
			  "title": "Mon 20",
			  "value": 82
			},
			{
			  "title": "Mon 27",
			  "value": 179
			}
		];

		const categories = rawData.map(one => one.title);
		const seriesData = rawData.map(one => one.value);

		const yAxisMax = 500;
		const yAxisMin = 0;

		this.isWindowSmall = global.window.innerWidth <= 640 ? true : false;

		this.chartOptions = {
			chart: {
				style: {
					fontFamily: 'Poppins'
				},
			},
			title: {
				text: ''
			},
		
			yAxis: {
				min: yAxisMin,
				max: yAxisMax,
				tickInterval: 100,
				title: {
					text: ''
				},
				labels: {
					style: {
						fontSize: 14,
						color:"#BAC4CF"
					}
				},
				plotLines: [{
					value: 0,
				}],
				gridLineColor: 'rgba(186,196,207,0.2)'
			},
		
			xAxis: {
				categories: categories,
				opposite: true,
				labels: {
					useHTML: true,
					formatter: function() {
						return "<div style='text-align:center;'>"
							+ "<div style='font-size:14px;'>" + this.value.slice(0, this.value.indexOf(" ")).toUpperCase() + "</div>"
							+ "<div style='font-size:16px;font-weight:bold;'>" + this.value.slice(this.value.indexOf(" ") + 1)+ "</div>"
							+ "</div>"
					}
				},
				lineWidth: 0,
			},
		
			legend: {
				enabled: false
			},
			plotOptions: {
				area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, "rgba(130,160,192,0.8)"],
                            [1, "rgba(255,255,255,0.2)"]
                        ]
                    },
                    marker: {
						enabled: false
					},
                    states: {
                        hover: {
                            enabled: false
                        },
                        inactive: {
                            enabled: false
                        }
                    },
					lineWidth: 0,
                    threshold: null
                },
				line: {
					lineColor: '#BAC4CF',
					marker: {
						enabled: false
					},
					enableMouseTracking: false,
					states: {
						hover: {
							enabled: false
						},
						inactive: {
							enabled: false
						}
					}
				},
			},
			series: [{
				type: 'area',
				name: 'Orders',
				data: seriesData,
				zIndex: -1
			}, {
				type: 'line',
				name: 'Orders',
				lineColor: '#114377',
				lineWidth: 4,
				marker: {
					enabled: true,
					symbol: 'circle',
					lineColor: '#fff',
					fillColor: '#1f4273',
					lineWidth: 4,
					radius: 8
				},
				enableMouseTracking: true,
				data: seriesData,
			}],
			credits: {
				enabled: false
			},
		}
	}

	render() {
		return (
			<div style={{width: this.isWindowSmall ? '100%' : '80%', marginLeft:'auto', marginRight:'auto'}}>
				<HighchartsReact
					highcharts={Highcharts}
					options={this.chartOptions}
				/>
			</div>
		);
	}
}

export default LineChart2;
