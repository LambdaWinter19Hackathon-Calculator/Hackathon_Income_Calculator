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
          <h5>Pre-Lambda Income</h5>
          <h5>Over {yearsOfWork ? yearsOfWork : 0} Years</h5>
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
          <h5>Post-Lambda Income</h5>
          <h5>Over {yearsOfWork ? yearsOfWork : 0} Years</h5>
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
          <h5>Overall Increase</h5>
          <h5>Over {yearsOfWork ? yearsOfWork : 0} Years</h5>
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

  @media (max-width: 600px) {
    width: 98%;
    flex-direction: column;
    margin: 0 auto;
    padding: 40px 20px;
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

  @media (max-width: 600px) {
    width: 100%;
    padding-bottom: 25px;
  }

  h5 {
    font-size: 1rem;

    @media (max-width: 600px) {
      font-size: 1.25rem;
    }
  }
`;

const Tweet = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    align-items: center;
  }

  @media (max-width: 600px) {
    width: 100%;

  }
`;

const Data = styled.p`
  padding-top: 10px;
  font-weight: 700;
  font-size: 1.4rem;

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

export default connect(mapStateToProps)(DataOutput);
