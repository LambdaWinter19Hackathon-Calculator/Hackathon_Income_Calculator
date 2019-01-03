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
        color: "hsl(0, 92%, 20%)",
        strokeWidth: 6
      }
    ];

    return (
      <GraphContainer>
        <FlexibleXYPlot margin={{ left: 100 }}>
          <XAxis title="Year" style={{ fontSize: 14 }} />
          <YAxis title="Total Earnings ($)" style={{ fontSize: 14 }} />
          <HorizontalGridLines style={{ stroke: "hsl(42, 15%, 90%)" }} />
          <VerticalGridLines style={{ stroke: "hsl(42, 15%, 90%)" }} />

          <LineSeries
            className="preLambda"
            animation="gentle"
            data={this.props.cumulativeBefore}
            style={{
              strokeLineJoin: "round",
              strokeWidth: 4,
              stroke: "hsl(36, 77%, 75%)"
            }}
          />
          <LineSeries
            className="postLambda"
            animation="gentle"
            data={this.props.cumulativeAfter}
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
          style={{ fontSize: 14, overflowY: "hidden" }}
        />
      </GraphContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    cumulativeBefore: state.cumulativeBefore,
    cumulativeAfter: state.cumulativeAfter
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

export default connect(mapStateToProps)(Graph);
