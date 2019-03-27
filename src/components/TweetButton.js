import React from "react"
import styled from "styled-components"

const Tweet = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 1024px) {
        align-items: center;
    }

    @media (max-width: 600px) {
        width: 100%;
    }
`

const TweetButton = props => {
    // console.log(props.tweetMsg);
    return (
        <Tweet>
            <a
                className="twitter-share-button"
                href={`https://twitter.com/intent/tweet`}
                data-size="large"
                data-text={props.tweetMsg ? props.tweetMsg : ""}
                data-url="https://compound.careers"
                data-related="twitterapi,twitter"
            >
                Tweet
            </a>
        </Tweet>
    )
}

export default TweetButton
