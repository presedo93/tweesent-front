import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import useMetrics from '../stores/metrics'
import '../styles/font.css'

const Metrics = () => {
    const { positives, neutrals, negatives, total } = useMetrics()

    const [prcPos, setPrcPos] = useState(0)
    const [prcNeu, setPrcNeu] = useState(0)
    const [prcNeg, setPrcNeg] = useState(0)

    useEffect(() => {
        if (total != 0) {
            setPrcPos(Math.floor((positives / total) * 100))
            setPrcNeu(Math.floor((neutrals / total) * 100))
            setPrcNeg(Math.floor((negatives / total) * 100))
        }
    }, [total])

    return (
        <Row>
            <Col className='flex justify-center'>
                <h1 className='metrics text-red-500'>{prcNeg}%</h1>
            </Col>
            <Col className='flex justify-center'>
                <h1 className='metrics text-blue-500'>{prcNeu}%</h1>
            </Col>
            <Col className='flex justify-center'>
                <h1 className='metrics text-green-500'>{prcPos}%</h1>
            </Col>
        </Row>
    )
}

export default Metrics
