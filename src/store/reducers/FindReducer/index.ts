import { 
  ArticleActionTypes,
  FindType, 
  FIND_ARTICLE} from "../../types";

export const initialState: FindType = {
  title: '',
  dateTime: ''
}
export function FindReducer(
  state = initialState,
  action: ArticleActionTypes
) {
  switch (action.type) {
    case FIND_ARTICLE:
      return {...state, ...action.payload};
    default:
      return state
  }
}
