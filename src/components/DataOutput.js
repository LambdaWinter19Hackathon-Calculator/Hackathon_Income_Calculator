import React, { Component } from "react";
// import { Button } from "reactstrap";
import styled from "styled-components";
import { connect } from "react-redux";
import NumberFormat from "react-number-format";

class DataOutput extends Component {
  render() {
    const { yearsOfWork, beforeTotal, afterTotal, tweetMsg } = this.props;
    console.log("tweet", tweetMsg);

    return (
      <OutputContainer>
        <Wrap>
          <p>Pre-Lambda Income</p>
          <p>Over {yearsOfWork ? yearsOfWork : 0} Years</p>
          <Data>
            <NumberFormat
              value={beforeTotal ? beforeTotal : 0}
              thousandSeparator={true}
              displayType={"text"}
              prefix={"$"}
            />
          </Data>
        </Wrap>

        <Wrap>
          <p>Post-Lambda Income</p>
          <p>Over {yearsOfWork ? yearsOfWork : 0} Years</p>
          <Data>
            <NumberFormat
              value={afterTotal ? afterTotal : 0}
              thousandSeparator={true}
              displayType={"text"}
              prefix={"$"}
            />
          </Data>
        </Wrap>

        <Wrap>
          <p>Overall Increase</p>
          <p>Over {yearsOfWork ? yearsOfWork : 0} Years</p>
          <Data>
            <NumberFormat
              value={afterTotal - beforeTotal}
              thousandSeparator={true}
              displayType={"text"}
              prefix={"$"}
            />
          </Data>
        </Wrap>

        {/* <Button className="export">Export</Button> */}

        <Tweet>
          <a
            className="twitter-share-button"
            href="https://twitter.com/intent/tweet"
            data-size="large"
            data-text={tweetMsg}
            data-url="https://compound.careers"
            data-related="twitterapi,twitter"
          >
            Tweet
          </a>
        </Tweet>
      </OutputContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    beforeTotal: state.beforeTotal,
    afterTotal: state.afterTotal,
    yearsOfWork: state.yearsOfWork,
    tweetMsg: state.tweetMsg
  };
};

//CSS ------------------------------------------------------------------------------------------------------------------------------------------------------------------

const OutputContainer = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  width: 18%;
  padding: 20px;
  border: 1px solid #b8b2a7;
  border-radius: 5px;
  justify-content: space-around;

  @media (max-width: 1024px) {
    flex-direction: row;
    width: 100%;
    min-height: 150px;
    justify-content: space-around;
    align-items: stretch;
  }

  @media (max-width: 650px) {
    flex-wrap: wrap;
  }

  /* .export {
    align-self: center;
    width: 100%;
    background: #cb6e17;
    border: 0;

    @media (max-width: 1024px) {
      width: 22%;
    }

    @media (max-width: 650px) {
      margin-top: 20px;
    }
  } */
`;

const Wrap = styled.div`
  line-height: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 1024px) {
    width: 25%;
    justify-content: space-between;
  }

  @media (max-width: 650px) {
    width: 33%;
  }
`;

const Tweet = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

const Data = styled.p`
  padding-top: 10px;
  font-weight: bold;
`;

export default connect(mapStateToProps)(DataOutput);
