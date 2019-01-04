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
        color: "hsl(349, 98%, 32%)",
        strokeWidth: 6
      }
    ];

    return (
      <GraphContainer>
        <FlexibleWidthXYPlot height={ 600 } margin={{ left: 100 }}>
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
              stroke: "hsl(349, 98%, 32%)"
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
    cumulativeAfter: state.cumulativeAfter
  };
};

//CSS ------------------------------------------------------------------------------------------------------------------------------------------------------------------

const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 600px;
  width: 60%;
  padding: 0 40px 0 20px;

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
