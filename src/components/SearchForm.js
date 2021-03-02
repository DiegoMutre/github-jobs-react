import { Col, Form } from "react-bootstrap";

const SearchForm = () => {
    return (
        <Form className="mb-4">
            <Form.Row className="align-items-end">
                <Form.Group as={Col}>
                    <Form.Label>Description</Form.Label>
                </Form.Group>
            </Form.Row>
        </Form>
    );
};

export default SearchForm;
