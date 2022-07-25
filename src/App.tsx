import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// Components
import Bar from './components/Bar'
import Search from './components/Search'
import Sentiment from './components/Sentiment'
import Metrics from './components/Metrics'

// Stores
import { useTheme } from './stores/themes'

// Interfaces
import { TweetSentiments, TweetBody } from './types/tweets'

export default function App() {
    const { dark } = useTheme()
    const bgcolor = dark ? 'bg-zinc-600' : 'bg-gray-300'

    const [tweets, setTweets] = useState<TweetSentiments>({
        metrics: {},
    } as TweetSentiments)

    return (
        <div className={'h-full ' + bgcolor}>
            <Bar />
            <Search setTweets={setTweets} />
            <div className='h-52' />
            <Container className='h-max' fluid>
                <Row>
                    <Metrics
                        positive={tweets.metrics.positives ?? 0.0}
                        neutral={tweets.metrics.neutral ?? 0.0}
                        negative={tweets.metrics.negatives ?? 0.0}
                    />
                </Row>
                <div className='h-12' />
                <Row xs={1} md={3}>
                    <Col>
                        <Sentiment sentiment='negative' tweets={tweets.negatives ?? []} />
                    </Col>
                    <Col>
                        <Sentiment sentiment='neutral' tweets={tweets.neutral ?? []} />
                    </Col>
                    <Col>
                        <Sentiment sentiment='positive' tweets={tweets.positives ?? []} />
                    </Col>
                </Row>
            </Container>
            <div className='h-12' />
        </div>
    )
}
