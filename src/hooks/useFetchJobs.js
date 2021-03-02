const ACTIONS = {
    MAKE_REQUEST: "make-request",
    GET_DATA: "get-data",
    ERROR: "error",
    UPDATE_HAS_NEXT_PAGE: "update-has-next-page",
};

const BASE_URL =
    "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.MAKE_REQUEST:
            return {
                loadings: true,
                jobs: [],
            };
        default:
            return state;
    }
};

export default function useFetchJobs(params, page) {}
