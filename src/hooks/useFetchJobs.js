import axios from "axios";
import { useEffect, useReducer } from "react";

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
                loading: true,
                jobs: [],
            };
        default:
            return state;
    }
};

const initialState = {
    loading: true,
    jobs: [],
};

export default function useFetchJobs(params, page) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const cancelToken1 = axios.CancelToken.source();
        dispatch({ type: ACTIONS.MAKE_REQUEST });

        axios
            .get(BASE_URL, {
                cancelToken: cancelToken1.token,
                params: {
                    markdown: true,
                    page,
                    ...params,
                },
            })
            .then(response => {
                // *TODO: Put the response in the state.
                console.log(response);
            });
    }, [page, params]);
}
