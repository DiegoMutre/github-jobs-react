import { Container } from "react-bootstrap";
import SearchForm from "./components/SearchForm";

function App() {
    return (
        <Container className="my-4">
            <h1 className="mb-4">Github Jobs</h1>
            <SearchForm />
        </Container>
    );
}

export default App;
