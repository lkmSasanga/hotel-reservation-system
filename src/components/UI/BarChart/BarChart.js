import React, {Component} from 'react';

import classes from './BarChart.module.css';

import Highcharts from 'highcharts'
import HighchartsReact from "highcharts-react-official";
// import HighchartsReact from 'highcharts-react-official'

class BarChart extends Component{


    render () {

        const chartComponent = {
            chart: {
                type: 'column',
                styledMode: true
            },

            title: {
                text: 'Styling axes and columns'
            },

            yAxis: [{
                className: 'highcharts-color-0',
                title: {
                    text: 'Primary axis'
                }
            }, {
                className: 'highcharts-color-1',
                opposite: true,
                title: {
                    text: 'Secondary axis'
                }
            }],

            plotOptions: {
                column: {
                    borderRadius: 5
                }
            },

            series: [{
                data: [1, 3, 2, 4]
            }, {
                data: [324, 124, 547, 221],
                yAxis: 1
            }]
        };

        return (
            <React.Fragment>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={chartComponent}
                />
            </React.Fragment>
        )
    };






}

export default BarChart;
