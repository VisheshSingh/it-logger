import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG
} from '../actions/types';

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
    case DELETE_LOG:
      return {
        ...state,
        loading: false,
        logs: state.logs.filter(log => log.id !== action.payload)
      };
    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map(log =>
          log.id === action.payload.id ? action.payload : log
        )
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
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
