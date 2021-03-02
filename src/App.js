import { useState } from "react";
import { Container } from "react-bootstrap";
import SearchForm from "./components/SearchForm";

function App() {
    const [params, setParams] = useState({
        description: "",
        location: "",
        full_time: "on" ? "off" : "on",
    });

    const handleParamChanges = e => {
        const param = e.target.name;
        const value = e.target.value;

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
