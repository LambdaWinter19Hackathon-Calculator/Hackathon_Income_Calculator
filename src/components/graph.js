import React, { Component } from "react";
import {
  XYPlot,
  FlexibleXYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries
} from "react-vis";

import styled from "styled-components";

const GraphContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 0px 20px;
`;

class Graph extends Component {
  render() {
    const annualEarnings = (initialSalary, annualRaise, yearsOfWork) => {
      let y = 0;
      let totalEarnings = [];

      for (let x = 0; x < yearsOfWork + 1; x++) {
        if (x === 0) {
          y = initialSalary;
          totalEarnings.push({ x, y });
        } else {
          y =
            totalEarnings[x - 1].y +
            initialSalary * Math.pow(1 + annualRaise, x);
          totalEarnings.push({ x, y });
        }
      }
      return totalEarnings;
    };

    return (
      <GraphContainer>
        <FlexibleXYPlot>
          <XAxis title="Year" />
          <YAxis title="" />
          <HorizontalGridLines />
          <VerticalGridLines />

          <LineSeries
            className="preLambda"
            data={annualEarnings(50000, 0.03, 40)}
          />
          <LineSeries
            className="postLambda"
            curve={"curveMonotoneX"}
            data={annualEarnings(100000, 0.03, 40)}
            strokeDasharray={"7, 3"}
          />
        </FlexibleXYPlot>
      </GraphContainer>
    );
  }
}

export default Graph;
