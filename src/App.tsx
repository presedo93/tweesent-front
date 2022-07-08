import { Container, Row, Col } from "react-bootstrap";

import Bar from "./components/Bar";
import Search from "./components/Search";
import Sentiment from "./components/Sentiment";
import Metrics from "./components/Metrics";
import { useTheme } from "./stores/settings";

export default function App() {
    const { dark } = useTheme();
    const bgcolor = dark ? "bg-zinc-600" : "bg-gray-300";

    return (
        <div className={"h-screen " + bgcolor}>
            <Bar />
            <Search />
            <div className="h-52" />
            <Container className="h-12" fluid>
                <Row>
                    <Metrics positive={33.3} neutral={33.3} negative={33.3} />
                </Row>
                <div className="h-12" />
                <Row>
                    <Col>
                        <Sentiment sentiment="negative" />
                    </Col>
                    <Col>
                        <Sentiment sentiment="neutral" />
                    </Col>
                    <Col>
                        <Sentiment sentiment="positive" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
