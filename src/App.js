import { useState } from "react";
import { Container } from "react-bootstrap";
import Job from "./components/Job";
import SearchForm from "./components/SearchForm";
import useFetchJobs from "./hooks/useFetchJobs";

function App() {
    const [params, setParams] = useState({
        description: "",
        location: "",
        full_time: false,
    });
    const [page, setPage] = useState(1);

    const { loading, jobs, error } = useFetchJobs(params, page);

    const handleParamChanges = e => {
        const param = e.target.name;
        const value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setPage(1);
        setParams(prevParams => ({ ...prevParams, [param]: value }));
    };

    return (
        <Container className="my-4">
            <h1 className="mb-4">Github Jobs</h1>
            <SearchForm
                params={params}
                handleParamChanges={handleParamChanges}
            />
            {loading && <h1>Loading...</h1>}
            {error && <h1>Error, Try refreshing.</h1>}
            {jobs.map(job => (
                <Job key={job.id} job={job} />
            ))}
        </Container>
    );
}

export default App;
