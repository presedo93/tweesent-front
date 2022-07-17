import { Col, Row } from "react-bootstrap";
import { useTheme } from "../stores/themes";

import { TweetBody } from "types/tweets";
import Tweet from "./Tweet";

interface SentimentProps {
    sentiment: string,
    tweets: Array<TweetBody>
}

const Sentiment = (props: SentimentProps) => {
    const { dark } = useTheme();
    const bgcolor = dark ? "bg-zinc-700" : "bg-gray-400";

    const bg = (): string => {
        if (props.sentiment === "negative")
            return "border-red-500 text-red-500";
        else if (props.sentiment === "positive")
            return "border-green-500 text-green-500";
        return "border-blue-500 text-blue-500";
    }

    return (
        <>
            <div className="h-6 md:hidden" />
            <Row>
                <Col md={{ span: 10, offset: 1 }} className={"h-16 rounded-lg border-2 flex justify-center items-center " + bg()}>
                    <h4>{props.sentiment}</h4>
                </Col>
            </Row>
            <br />
            <Row>
                <Col md={{ span: 10, offset: 1 }} className={"overflow-y-auto rounded-lg h-[42rem] " + bgcolor }>
                    {props.tweets.map((tweet: any) => (
                        <Tweet key={tweet.id} body={tweet} />
                    ))}
                </Col>
            </Row>
        </>
    )
};

export default Sentiment;
