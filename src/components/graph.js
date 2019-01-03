import React, { Component } from "react";
import styled from "styled-components";
import {
  FlexibleXYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  DiscreteColorLegend
} from "react-vis";


class Graph extends Component {
  render() {
    const legendItems = [
      {
        title: "Pre-Lambda",
        color: "hsl(36, 77%, 75%)",
        strokeWidth: 6
      },
      {
        title: "Post-Lambda",
        color: "hsl(0, 92%, 20%)",
        strokeWidth: 6
      }
    ];
    
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
        <FlexibleXYPlot margin={{ left: 100 }}>
          <XAxis title="Year" style={{ fontSize: 14 }} />
          <YAxis title="Total Earnings ($)" style={{ fontSize: 14 }} />
          <HorizontalGridLines style={{ stroke: "hsl(42, 15%, 90%)" }} />
          <VerticalGridLines style={{ stroke: "hsl(42, 15%, 90%)" }} />

          <LineSeries
            className="preLambda"
            data={annualEarnings(50000, 0.03, 40)}
            style={{
              strokeLineJoin: "round",
              strokeWidth: 4,
              stroke: "hsl(36, 77%, 75%)"
            }}
          />
          <LineSeries
            className="postLambda"
            curve={"curveMonotoneX"}
            data={annualEarnings(100000, 0.03, 40)}
            style={{
              strokeLineJoin: "round",
              strokeWidth: 4,
              stroke: "hsl(0, 92%, 20%)"
            }}
          />
        </FlexibleXYPlot>
        <DiscreteColorLegend
          items={legendItems}
          orientation="horizontal"
          style={{ fontSize: 14, overflowY:'hidden' }}
        />
      </GraphContainer>
    );
  };
};

//CSS ------------------------------------------------------------------------------------------------------------------------------------------------------------------

const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-right: 20px;
`;

export default Graph;
