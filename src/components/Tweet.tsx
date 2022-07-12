import { TwitterTweetEmbed } from "react-twitter-embed";

interface TweetProps {
    id: string,
}

const Tweet = (pros: TweetProps) => {

    return (
        <>
            <TwitterTweetEmbed
                tweetId={pros.id}
            />
        </>
    )
};

export default Tweet;
