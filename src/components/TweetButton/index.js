import React from "react"

const TweetButton = props => {
    return (
        <div class="tweet-btn">
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
        </div>
    )
}

export default TweetButton
