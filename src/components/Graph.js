import React, { Component } from "react";
import styled from "styled-components";
import {
  FlexibleWidthXYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  DiscreteColorLegend
} from "react-vis";
import { connect } from "react-redux";

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
        color: "#A0021E",
        strokeWidth: 6
      }
    ];

    return (
      <GraphContainer>
        <FlexibleWidthXYPlot height={600} margin={{ left: 95 }}>
          <XAxis title="Year" style={{ fontSize: 14 }} />
          <YAxis title="Total Earnings ($)" style={{ fontSize: 14 }} />
          <HorizontalGridLines style={{ stroke: "hsl(42, 15%, 90%)" }} />
          <VerticalGridLines style={{ stroke: "hsl(42, 15%, 90%)" }} />

          <LineSeries
            className="preLambda"
            animation="gentle"
            data={
              this.props.cumulativeBefore.length > 0
                ? this.props.cumulativeBefore
                : [{ x: 0, y: 5000 }, { x: 40, y: 5000 }]
            }
            style={{
              strokeLineJoin: "round",
              strokeWidth: 4,
              stroke: "hsl(36, 77%, 75%)"
            }}
          />
          <LineSeries
            className="postLambda"
            animation="gentle"
            data={
              this.props.cumulativeAfter.length > 0
                ? this.props.cumulativeAfter
                : [{ x: 0, y: 10000 }, { x: 40, y: 10000 }]
            }
            style={{
              strokeLineJoin: "round",
              strokeWidth: 4,
              stroke: "#A0021E"
            }}
          />
        </FlexibleWidthXYPlot>
        <DiscreteColorLegend
          items={legendItems}
          orientation="horizontal"
          style={{ fontSize: 14, overflowY: "hidden", paddingLeft: 20 }}
        />
      </GraphContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    cumulativeBefore: state.cumulativeBefore,
    cumulativeAfter: state.cumulativeAfter,
    yearsOfWork: state.yearsOfWork
  };
};

//CSS ------------------------------------------------------------------------------------------------------------------------------------------------------------------

const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 600px;
  width: 64%;
  padding: 0 20px 0 15px;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 40px 40px 40px 20px;
  }

  @media (max-width: 650px) {
    padding: 40px 0;
  }

  }
`;

export default connect(mapStateToProps)(Graph);
