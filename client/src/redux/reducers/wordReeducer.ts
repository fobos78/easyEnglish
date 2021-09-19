const SET_DESCRIPTION = "SET_DESCRIPTION";
const SET_WORD_EN = "SET_WORD_EN";
const SET_WORD_RUS = "SET_WORD_RUS";

const defaultState = {
  description: [],
  wordEn: [],
  wordRus: [],
};

export default function wordReducer(state = defaultState, action: any) {
  switch (action.type) {
    case SET_DESCRIPTION:
      return {
        ...state,
        description: action.payload,
      };
    case SET_WORD_EN:
      return {
        ...state,
        wordEn: action.payload,
      };
    case SET_WORD_RUS:
      return {
        ...state,
        wordRus: action.payload,
      };
    default:
      return state;
  }
}

export const setDescriptions = (description: string[]) => ({
  type: SET_DESCRIPTION,
  payload: description,
});
export const setWordsEn = (wordEn: string[]) => ({
  type: SET_WORD_EN,
  payload: wordEn,
});
export const setWordsRus = (wordRus: string[]) => ({
  type: SET_WORD_RUS,
  payload: wordRus,
});
