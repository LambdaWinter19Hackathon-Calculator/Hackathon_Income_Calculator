import React, { Component } from "react";
import styled from "styled-components";
import {
  FlexibleWidthXYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  DiscreteColorLegend,
  Highlight,
  Borders
} from "react-vis";
import { connect } from "react-redux";

class Graph extends Component {
  state = {
    lastDrawLocation: null
  };

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

    const { lastDrawLocation } = this.state;

    return (
      <GraphContainer>
        <FlexibleWidthXYPlot
          height={600}
          margin={{ left: 95 }}
          xDomain={
            lastDrawLocation && [lastDrawLocation.left, lastDrawLocation.right]
          }
          yDomain={
            lastDrawLocation && [lastDrawLocation.bottom, lastDrawLocation.top]
          }
        >
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

          <Borders style={{ all: { fill: "#FAF9F7" } }} />
          <XAxis title="Year" style={{ fontSize: 14 }} />
          <YAxis title="Total Earnings ($)" style={{ fontSize: 14 }} />

          <Highlight
            onBrushEnd={area => this.setState({ lastDrawLocation: area })}
            onDrag={area => {
              this.setState({
                lastDrawLocation: {
                  bottom: lastDrawLocation.bottom + (area.top - area.bottom),
                  left: lastDrawLocation.left - (area.right - area.left),
                  right: lastDrawLocation.right - (area.right - area.left),
                  top: lastDrawLocation.top + (area.top - area.bottom)
                }
              });
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
`;

export default connect(mapStateToProps)(Graph);
