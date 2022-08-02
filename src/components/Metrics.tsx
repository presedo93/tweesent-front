import { Row, Col } from 'react-bootstrap'
import useMetrics from '../stores/metrics'
import '../styles/font.css'

const Metrics = () => {
    const { positives, neutrals, negatives } = useMetrics()
    return (
        <Row>
            <Col className='flex justify-center'>
                <h1 className='metrics text-red-500'>{negatives}%</h1>
            </Col>
            <Col className='flex justify-center'>
                <h1 className='metrics text-blue-500'>{neutrals}%</h1>
            </Col>
            <Col className='flex justify-center'>
                <h1 className='metrics text-green-500'>{positives}%</h1>
            </Col>
        </Row>
    )
}

export default Metrics
