const SET_ERROR = "SET_ERROR";
const CLOSE_ERROR = "CLOSE_ERROR";

const defaultState = {
  error: {},
  isOpen: false,
  status: null,
};

export default function wordReducer(state = defaultState, action: any) {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isOpen: true,
        status: action.payload.status,
      };
      case CLOSE_ERROR:
      return {
        ...state,
        error: {},
        isOpen: false,
        status: null,
      };
    default:
      return state;
  }
}

export const setError = (error: any) => ({
  type: SET_ERROR,
  payload: error,
});
export const closeError = () => ({
    type: CLOSE_ERROR,
  });
