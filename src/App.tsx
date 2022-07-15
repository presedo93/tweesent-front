import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

// Components
import Bar from "./components/Bar";
import Search from "./components/Search";
import Sentiment from "./components/Sentiment";
import Metrics from "./components/Metrics";

// Stores
import { useTheme } from "./stores/themes";

// Interfaces
import { TweetSentiments, TweetBody } from "./types/tweets";

export default function App() {
    const { dark } = useTheme();
    const bgcolor = dark ? "bg-zinc-600" : "bg-gray-300";

    const [tweets, setTweets] = useState<TweetSentiments>({
        positives: [{
            id: "1547715207610265603",
            text: "@ConchoLopez10 @AlonsoChm26 @Vellista4 @DRAbdiel_ @sudanalytics_ Salieron todos de acá:\n- Julián Álvarez (Man. City)\n- Lautaro (Inter)\n- Joaquín Correa (Inter)\n- Lisandro Martínez (Man. United)\n- Romero (Tottenham)\n- Lo Celso (Tottenham)\n- Di María (Juventus)\n- Paredes  (PSG)\n- Messi (PSG)\n- De Paul (Atl. Madrid)\n- Ángel Correa (Atl. Madrid)",
            created_at: "2022-07-14T22:50:35+00:00",
            retweets: 0,
            likes: 0,
            username: "Sonyzta",
            name: "Lorenzo Di Pasquale 🇦🇷",
            image: "https://pbs.twimg.com/profile_images/1532227145421860864/FuNuHl3A_normal.jpg",
            sentiment: "positive"
        } as TweetBody],
        metrics: {}
    } as TweetSentiments);

    return (
        <div className={"h-max " + bgcolor}>
            <Bar />
            <Search setTweets={setTweets} />
            <div className="h-52" />
            <Container className="h-max" fluid>
                <Row>
                    <Metrics
                        positive={tweets.metrics.positives ?? 0.0}
                        neutral={tweets.metrics.neutral ?? 0.0}
                        negative={tweets.metrics.negatives ?? 0.0}
                    />
                </Row>
                <div className="h-12" />
                <Row xs={1} md={3}>
                    <Col>
                        <Sentiment
                            sentiment="negative"
                            tweets={tweets.negatives ?? []}
                        />
                    </Col>
                    <Col>
                        <Sentiment
                            sentiment="neutral"
                            tweets={tweets.neutral ?? []}
                        />
                    </Col>
                    <Col>
                        <Sentiment
                            sentiment="positive"
                            tweets={tweets.positives ?? []}
                        />
                    </Col>
                </Row>
            </Container>
            <div className="h-12" />
        </div>
    );
}
