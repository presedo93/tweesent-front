import { Form } from "react-bootstrap";

const FetchParams = () => {
    return (
        <Form.Group>
            <div className="flex justify-center mr-24">
                <Form.Label className="mt-1">Number of tweets</Form.Label>
                <div className="w-24">
                    <Form.Control className="h-8 ml-24" type="text" />
                </div>
            </div>
            <br />
            <div className="flex justify-center">
                <Form.Label>Allow retweets</Form.Label>
                <Form.Check type="checkbox" className="ml-4" />
                <Form.Label className="ml-12">Allow replies</Form.Label>
                <Form.Check type="checkbox" className="ml-4" />
            </div>
        </Form.Group>
    )
}

export default FetchParams;
