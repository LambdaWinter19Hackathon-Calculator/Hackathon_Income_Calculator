import React, { Component } from "react";
import { curveCatmullRom } from 'd3-shape';
import { XYPlot, XAxis, YAxis, ChartLabel, HorizontalGridLines, VerticalGridLines, LineSeries, LineSeriesCanvas } from 'react-vis';

function ShowcaseButton(props) {
    const {buttonContent, onClick} = props;
    return (
      <button className="showcase-button" onClick={onClick}>
        {buttonContent}
      </button>
    );
  }

class Graph extends Component {
    state = {
        useCanvas: false
    }

    render() {
        const {useCanvas} = this.state;
        const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';
        const Line = useCanvas ? LineSeriesCanvas : LineSeries;

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
                        <ShowcaseButton
          onClick={() => this.setState({useCanvas: !useCanvas})}
          buttonContent={content}
        />
                <XYPlot height={300} width={300}>
                    <XAxis />
                    <YAxis />
                    <HorizontalGridLines />
                    <VerticalGridLines />
                    
                    <Line className="preLambda" data={data} /> 
                    <Line
                        className="preLambda"
                        curve={'curveMonotoneX'}
                        data={[{x: 1, y: 10}, {x: 2, y: 4}, {x: 3, y: 2}, {x: 4, y: 15}]}
                        strokeDasharray={useCanvas ? [7, 3] : '7, 3'}
                    /> 
                    
                    
                </XYPlot>
            </div>
        );
    };
};

export default Graph;



