import { Container, Row, Col } from 'react-bootstrap'

// Components
import Bar from './components/Bar'
import Search from './components/Search'
import Sentiment from './components/Sentiment'
import Metrics from './components/Metrics'

// Stores
import useTheme from './stores/themes'
import useTweets from './stores/tweets'

export default function App() {
    const { dark } = useTheme()
    const { positives, neutrals, negatives } = useTweets()
    const bgcolor = dark ? 'bg-zinc-600' : 'bg-gray-300'

    return (
        <div className={'h-full 2xl:h-screen ' + bgcolor}>
            <Bar />
            <Search />
            <div className='h-52' />
            <Container className='h-max' fluid>
                <Row>
                    <Metrics />
                </Row>
                <div className='h-12' />
                <Row xs={1} md={3}>
                    <Col>
                        <Sentiment sentiment='negative' tweets={negatives ?? []} />
                    </Col>
                    <Col>
                        <Sentiment sentiment='neutral' tweets={neutrals ?? []} />
                    </Col>
                    <Col>
                        <Sentiment sentiment='positive' tweets={positives ?? []} />
                    </Col>
                </Row>
            </Container>
            <div className='h-12' />
        </div>
    )
}
