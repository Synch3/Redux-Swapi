// we'll need axios
import axios from "axios";

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FETCHING_DATA = "FETCHING_DATA";
export const DATA_FETCH_SUCCESS = "DATA_FETCH_SUCCESS";
export const DATA_FETCH_ERROR = "DATA_FETCH_ERROR";
// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
export const fetchData = () => {
	const promise = axios.get("https://swapi.co/api/people/");
	return dispatch => {
		dispatch({ type: FETCHING_DATA });
		promise
			.then(response => {
                console.log(response.data.results);
				dispatch({
					type: DATA_FETCH_SUCCESS,
					payload: response.data.results
				});
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: DATA_FETCH_ERROR });
			});
	};
};