import { Row, Col } from "react-bootstrap";
import "../styles/font.css";

interface MetricsProps {
    positive: number,
    neutral: number,
    negative: number,
}

const Metrics = (props: MetricsProps) => {
    return (
        <Row className="relative -left-16">
            <Col lg={{ offset: 2 }}>
                <h1 className="metrics text-red-500">{props.negative}</h1>
            </Col>
            <Col lg={{ offset: 2 }}>
                <h1 className="metrics text-blue-500">{props.neutral}</h1>
            </Col>
            <Col lg={{ offset: 2 }}>
                <h1 className="metrics text-green-500">{props.positive}</h1>
            </Col>
        </Row>
    )
};

export default Metrics;
