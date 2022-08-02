import { Form } from 'react-bootstrap'
import useParams from '../../stores/params'

const FetchParams = () => {
    let { numTweets, allowRt, allowRe, setTweets, setRt, setRe } = useParams()
    return (
        <Form.Group>
            <div className='flex justify-center mr-24'>
                <Form.Label className='mt-1'>Number of tweets</Form.Label>
                <div className='w-24'>
                    <Form.Control
                        className='h-8 ml-24'
                        type='text'
                        value={numTweets}
                        onChange={(e) => setTweets(Number(e.target.value))}
                    />
                </div>
            </div>
            <br />
            <div className='flex justify-center'>
                <Form.Label>Allow retweets</Form.Label>
                <Form.Check
                    type='checkbox'
                    className='ml-4'
                    checked={allowRt}
                    onChange={(e) => setRt(e.target.checked)}
                />
                <Form.Label className='ml-12'>Allow replies</Form.Label>
                <Form.Check
                    type='checkbox'
                    className='ml-4'
                    checked={allowRe}
                    onChange={(e) => setRe(e.target.checked)}
                />
            </div>
        </Form.Group>
    )
}

export default FetchParams
