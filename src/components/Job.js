import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

const Job = ({ job }) => {
    return (
        <Card className="mb-3">
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <div>
                        <Card.Title>
                            {job.title} -
                            <span className="text-muted font-weight-light">
                                {job.company}
                            </span>
                        </Card.Title>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

Job.propTypes = {
    job: PropTypes.object.isRequired,
};

export default Job;
