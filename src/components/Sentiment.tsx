import { Col, Row } from "react-bootstrap";

interface SentimentProps {
    sentiment: string,
}

const Sentiment = (props: SentimentProps) => {
    const bg = (): string => {
        if (props.sentiment === "negative")
            return "border-red-500 text-red-500";
        else if (props.sentiment === "positive")
            return "border-green-500 text-green-500";
        return "border-blue-500 text-blue-500";
    }

    return (
        <>
            <Row>
                <Col md={{ span: 10, offset: 1 }} className={"h-16 rounded-lg border-2 flex justify-center items-center " + bg()}>
                    <h4>{props.sentiment}</h4>
                </Col>
            </Row>
            <br />
            <Row>
                <Col md={{ span: 10, offset: 1 }} className="rounded-lg bg-gray-700 h-[28rem]">
                </Col>
            </Row>
        </>
    )
};

export default Sentiment;
