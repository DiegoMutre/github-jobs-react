import PropTypes from "prop-types";
import { Col, Form } from "react-bootstrap";

const SearchForm = ({ params, handleParamChanges }) => {
    return (
        <Form className="mb-4">
            <Form.Row className="align-items-end">
                <Form.Group as={Col}>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        value={params.description}
                        onChange={handleParamChanges}
                        name="description"
                        type="text"
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                        value={params.location}
                        onChange={handleParamChanges}
                        name="location"
                        type="text"
                    />
                </Form.Group>
                <Form.Group as={Col} xs="auto" className="ml-2">
                    <Form.Check
                        onChange={handleParamChanges}
                        name="full_time"
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

SearchForm.propTypes = {
    params: PropTypes.object.isRequired,
    handleParamChanges: PropTypes.func.isRequired,
};

export default SearchForm;
