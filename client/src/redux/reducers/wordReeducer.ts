const SET_WORDS = 'SET_WORDS';

const defaultState = {
words:[]
};

export  default  function wordReducer(state = defaultState, action: any){
  switch(action.type){
  case SET_WORDS:
    return {
      ...state,
      words: action.payload,
    }
  default:
    return state;
  }
}

export const setWords = (words: string[]) => ({type: SET_WORDS, payload: words});