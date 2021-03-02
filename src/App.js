import { useState } from "react";
import { Container } from "react-bootstrap";
import SearchForm from "./components/SearchForm";

function App() {
    const [params, setParams] = useState({
        description: "",
        location: "",
        full_time: false,
    });
    const [page, setPage] = useState(1);

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
        </Container>
    );
}

export default App;
