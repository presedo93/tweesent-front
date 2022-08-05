import useParams from '../../stores/params'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const LiveParams = () => {
    const { socket, setSocket, interval, setInterval } = useParams()

    const stopWebS = () => {
        console.log('Stop clicked')
        setSocket(false)
    }

    return (
        <Form.Group>
            <div className='flex justify-center mr-24'>
                <Form.Label className='mt-1'>Set interval</Form.Label>
                <div className='w-24'>
                    <Form.Control
                        className='h-8 ml-24'
                        type='text'
                        value={interval}
                        onChange={(e) => setInterval(Number(e.target.value))}
                    />
                </div>
            </div>
            <br />
            <div className='flex justify-center mr-18'>
                <Button variant='danger' onClick={stopWebS} disabled={!socket}>
                    Stop
                </Button>
            </div>
        </Form.Group>
    )
}

export default LiveParams
