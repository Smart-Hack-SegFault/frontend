import { ADD_USER_SUCCESS, GET_SKILLS_SUCCESS, START_LOADING } from './actions'
const reducer = (state, action) => {
  if (action.type === START_LOADING) {
    return { ...state, isLoading: true }
  }

  if (action.type === ADD_USER_SUCCESS) {
    return { ...state, isLoading: false, user: action.payload }
  }

  if (action.type === GET_SKILLS_SUCCESS) {
    return { ...state, isLoading: false, skills: action.payload }
  }
}

export default reducer
