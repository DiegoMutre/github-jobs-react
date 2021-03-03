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
                ...state,
                loading: true,
                jobs: [],
            };
        case ACTIONS.GET_DATA:
            return {
                ...state,
                loading: false,
                jobs: action.payload,
            };
        case ACTIONS.ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                jobs: [],
            };
        case ACTIONS.UPDATE_HAS_NEXT_PAGE:
            return {
                ...state,
                has_next_page: action.payload,
            };
        default:
            return state;
    }
};

const initialState = {
    loading: true,
    jobs: [],
    has_next_page: false,
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
                dispatch({ type: ACTIONS.GET_DATA, payload: response.data });
            })
            .catch(err => {
                if (axios.isCancel(err)) return;
                dispatch({ type: ACTIONS.ERROR, payload: err });
            });

        const cancelToken2 = axios.CancelToken.source();

        axios
            .get(BASE_URL, {
                cancelToken: cancelToken2.token,
                params: {
                    markdown: true,
                    page: page + 1,
                    ...params,
                },
            })
            .then(response => {
                dispatch({
                    type: ACTIONS.UPDATE_HAS_NEXT_PAGE,
                    payload: response.data.length !== 0,
                });
            })
            .catch(err => {
                if (axios.isCancel(err)) return;
                dispatch({ type: ACTIONS.ERROR, payload: err });
            });
    }, [page, params]);

    return state;
}
