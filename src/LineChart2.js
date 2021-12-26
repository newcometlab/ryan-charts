import React, { Component } from "react";
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

		this.chartOptions = {
			chart: {
				marginRight: 20
			},
			title: {
				text: ''
			},
		
			yAxis: {
				min: 0,
				max: 500,
				title: {
					text: ''
				},
				labels: {
					style: {
						fontSize: 14
					}
				},
				gridLineColor: '#d5dae0',
				plotLines: [{
					value: 0,
					color: '#d5dae0',
					width: 5
				}]
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
				offset: 20,
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
                            [0, "#8591a3"],
                            [1, "transparent"]
                        ]
                    },
                    marker: {
						lineColor: '#fff',
						fillColor: '#1f4273',
						lineWidth: 5,
						radius: 10
					},
					lineColor: '#1f4273',
                    lineWidth: 8,
                    states: {
                        hover: {
                            lineWidth: 8
                        }
                    },
                    threshold: null
                },
				series: {
					pointPlacement: "on"
				}
			},
			series: [{
				type: 'area',
				name: 'Orders',
				data: seriesData
			}],
			credits: {
				enabled: false
			},
		}
	}

	render() {
		return (
			<div style={{width: global.window.innerWidth <= 500 ? '90%' : '60%', marginLeft:'auto', marginRight:'auto'}}>
				<HighchartsReact
					highcharts={Highcharts}
					options={this.chartOptions}
				/>
			</div>
		);
	}
}

export default LineChart2;
