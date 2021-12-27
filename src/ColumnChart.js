import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const borderRadius = require("highcharts-border-radius");
borderRadius(Highcharts);

class ColumnChart extends Component {
	constructor(props) {
		super(props);

		const rawData = {
			"Aa": {val: 3, rate: -2.5, color: '#676d71' },
			"Pg": {
				val: 36000,
				rate: 1.48,
				color: {
					linearGradient: {
						x1: 0,
						x2: 0,
						y1: 0,
						y2: 1
					},
					stops: [
						[0, '#fbc213'],
						[1, '#fc8215']
					]
				}
			},
			"Td": { 
				val: 250, rate: 3.07, 
				color: {
					linearGradient: {
						x1: 0,
						x2: 0,
						y1: 0,
						y2: 1
					},
					stops: [
						[0, '#11e14c'],
						[1, '#06ae4d']
					]
				}
			},
			"Tf": {
				val: 7300000,
				rate: -2.5,
				color: {
					linearGradient: {
						x1: 0,
						x2: 0,
						y1: 0,
						y2: 1
					},
					stops: [
						[0, '#ef3016'],
						[1, '#d40e0d']
					]
				}
			},
			"Fn": {
				val: 1400,
				rate: 1.8,
				color: {
					linearGradient: {
						x1: 0,
						x2: 0,
						y1: 0,
						y2: 1
					},
					stops: [
						[0, '#11e24c'],
						[1, '#06ae4d']
					]
				}
			},
		};

		const categories = Object.keys(rawData);

		const seriesData = Object.keys(rawData).map(key => {
			const vv = parseInt(Math.log10(rawData[key].val));
			return { y: vv === 0 ? 0.1 : vv, color: rawData[key].color };
		});

		const chartData = Object.keys(rawData).map(key => {
			const v_st = parseInt(Math.log10(rawData[key].val));
			const v_nd = rawData[key].val / Math.pow(10, v_st);
			return { 
				v_st: v_st,
				v_nd: v_nd,
				color: rawData[key].color,
				rate: rawData[key].rate,
			};
		});

		const isSmall = global.window.innerWidth <= 640 ? true : false;
		this.isWindowSmall = isSmall;

		this.chartOptions = {
			chart: {
				type: "column",
				plotBackgroundColor: '#eef2f6',
				events: {
					load: function () {
						this.plotBackground.attr({
							rx: 10,
							ry: 10
						})
					}
				},
				marginRight: 30,
				style: {
					fontFamily: 'Poppins'
				}
			},
			title: {
				text: ''
			},
			xAxis: {
				categories: categories,
				labels: {
					style: {
						fontSize: 12,
						fontWeight: 600
					}
				},
				lineWidth: 0,
				offset: 10,
			},
			yAxis: {
				min: 0,
				max: 8,
				tickInterval: 1,
				title: {
					align: 'low',
					offset: isSmall ? 20 : 35,
					useHTML: true,
					text: "<div style='text-align:center;font-size:12px;color:#828282;'><div></div>Bacterial<div></div>Load</div>",
					rotation: 0,
					y: 15
				},
				labels: {
					useHTML: true,
					step: 1,
					formatter: function() {
						return "<span style='font-size:12px;font-weight:600;'>" 
							+ (this.value === 0 ? "" : "10<sup>" + this.value + "</sup>")
							+ "</span>"
					}
				},
				gridLineColor: '#fff'
			},
			plotOptions: {
				column: {
					borderRadiusTopLeft: 500,
					borderRadiusTopRight: 500,
					pointWidth: 30
				},
				series: {
					dataLabels: {
						enabled: true,
						y: -5,
						useHTML: true,
						formatter: function () {
							const xx = this.point.x;
							const v_st = chartData[xx].v_st;
							const v_nd = chartData[xx].v_nd;
							const rate = chartData[xx].rate;
							const bytes = "<div style='font-weight:600;'>"
								+ "<div style='font-size:" + (v_st === 0 ? 10 : (isSmall ? 10 : 12)) + "px;color:#0B0B0B;text-align:center;'>"
								+		(v_st === 0 ? "Not Detected" : (v_nd + "  x  10<sup>" + v_st + "</sup>"))
								+ "</div>"
								+ "<div style='font-size:" + (isSmall ? 8 : 10) + "px;color:" + (rate > 0 ? '#F13737' : '#219653') + ";text-align:center;'>"
								+ 		(rate > 0 ? "+" : "") + rate.toFixed(2) +"%"
								+ "</div>"
								+ "</div>"
							return  bytes;
						}
					}
				}
			},
			tooltip: {
				enabled: false
			},
			series: [
				{
					name: "Series 1",
					data: seriesData,
					dataLabels: {
						enabled: true,
					}
				},
			],
			credits: {
				enabled: false
			},
			legend: {
				enabled: false
			}
		};
	}

	componentDidMount() {
		let svg = document.getElementsByTagName("svg");
		if (svg.length > 0) {
			let path = svg[0].getElementsByTagName("path");
			if (path.length > 1) {
				path[0].setAttributeNS(null, "stroke-linejoin", "round");
			}
		}
	}

	render() {
		return (
			<div style={{width: this.isWindowSmall ? '100%' : '80%', marginLeft:'auto', marginRight:'auto'}}>
				<HighchartsReact highcharts={Highcharts} options={this.chartOptions} />
			</div>
		);
	}
}

export default ColumnChart;
