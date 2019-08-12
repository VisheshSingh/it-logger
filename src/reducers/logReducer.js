import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG } from '../actions/types';

const initState = {
  logs: null,
  current: null,
  loading: false,
  error: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        loading: false,
        logs: action.payload
      };
    case ADD_LOG:
      return {
        ...state,
        loading: false,
        logs: [...state.logs, action.payload]
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case LOGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
