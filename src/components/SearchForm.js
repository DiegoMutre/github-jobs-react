import { Col, Form } from "react-bootstrap";

const SearchForm = () => {
    return (
        <Form className="mb-4">
            <Form.Row className="align-items-end">
                <Form.Group as={Col}>
                    <Form.Label>Description</Form.Label>
                    <Form.Control name="description" type="text" />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Location</Form.Label>
                    <Form.Control name="location" type="text" />
                </Form.Group>
                <Form.Group as={Col} xs="auto" className="ml-2">
                    <Form.Check
                        name="full-time"
                        id="full-time"
                        label="Only Full Time"
                        type="checkbox"
                        className="mb-2"
                    />
                </Form.Group>
            </Form.Row>
        </Form>
    );
};

export default SearchForm;
