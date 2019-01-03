import React, { Component } from "react";
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries } from 'react-vis';

class Graph extends Component {

    render() {
        const data = [
            {x: 0, y: 8},
            {x: 1, y: 5},
            {x: 2, y: 4},
            {x: 3, y: 9},
            {x: 4, y: 1},
            {x: 5, y: 7},
            {x: 6, y: 6},
            {x: 7, y: 3},
            {x: 8, y: 2},
            {x: 9, y: 0}
          ];

        return (
            <div>
                <XYPlot height={300} width={300}>
                    <XAxis />
                    <YAxis />
                    <HorizontalGridLines />
                    <VerticalGridLines />
                    
                    <LineSeries 
                        className="preLambda" 
                        data={data} 
                    /> 
                    <LineSeries
                        className="preLambda"
                        curve={'curveMonotoneX'}
                        data={[{x: 1, y: 10}, {x: 2, y: 4}, {x: 3, y: 2}, {x: 4, y: 15}]}
                        strokeDasharray={ '7, 3'}
                    /> 
                </XYPlot>
            </div>
        );
    };
};

export default Graph;



