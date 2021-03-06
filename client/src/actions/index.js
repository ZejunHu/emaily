import axios from "axios";
import Materialize from "materialize-css";
import { FETCH_USER, FETCH_SURVEYS, SORT_SURVEYS } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  try {
    const res = await axios.post("/api/surveys", values);

    history.push("/surveys");
    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (err) {
    Materialize.toast("No Enough Credits!", 4000, "red white-text flow-text");
  }
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get("/api/surveys");

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

export const removeSurveys = values => async dispatch => {
  const res = await axios.post("/api/surveys/remove", values);

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

export const sortSurveys = values => dispatch => {
  dispatch({ type: SORT_SURVEYS, payload: values });
};
