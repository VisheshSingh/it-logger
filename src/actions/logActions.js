import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT
} from './types';

// get all logs
export const getLogs = () => {
  return async dispatch => {
    try {
      setLoading();
      const res = await fetch('/logs');
      const data = await res.json();

      dispatch({
        type: GET_LOGS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.data
      });
    }
  };
};

// add log
export const addLog = log => {
  return async dispatch => {
    try {
      setLoading();
      const res = await fetch('/logs', {
        method: 'POST',
        body: JSON.stringify(log),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();

      dispatch({
        type: ADD_LOG,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.data
      });
    }
  };
};

// delete log
export const deleteLog = id => {
  return async dispatch => {
    try {
      setLoading();
      await fetch(`/logs/${id}`, {
        method: 'DELETE'
      });

      dispatch({
        type: DELETE_LOG,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.data
      });
    }
  };
};

// update log
export const updateLog = log => {
  return async dispatch => {
    try {
      setLoading();
      const res = await fetch(`/logs/${log.id}`, {
        method: 'PUT',
        body: JSON.string(log),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      dispatch({
        type: UPDATE_LOG,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.data
      });
    }
  };
};

// Set current
export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  };
};

// Clear current
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
