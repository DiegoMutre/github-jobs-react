import PropTypes from "prop-types";
import { Pagination } from "react-bootstrap";

const JobsPagination = ({ page, setPage, has_next_page }) => {
    const adjustPage = amount => setPage(prevState => prevState + amount);

    return (
        <Pagination>
            {page !== 1 && <Pagination.Prev onClick={() => adjustPage(-1)} />}
            {page !== 1 && (
                <Pagination.Item onClick={() => setPage(1)}>1</Pagination.Item>
            )}
            {page > 2 && <Pagination.Ellipsis />}
            {page > 2 && (
                <Pagination.Item onClick={() => adjustPage(-1)}>
                    {page - 1}
                </Pagination.Item>
            )}
            {has_next_page && (
                <Pagination.Item onClick={() => adjustPage(1)}>
                    {page + 1}
                </Pagination.Item>
            )}
            {has_next_page && <Pagination.Next onClick={() => adjustPage(1)} />}
        </Pagination>
    );
};

JobsPagination.propTypes = {
    page: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired,
    has_next_page: PropTypes.bool.isRequired,
};

export default JobsPagination;
