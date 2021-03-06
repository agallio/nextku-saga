import { actionTypes } from '../actions'

const initialState = {
  count: 0,
  error: false,
  lastUpdate: 0,
  light: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error }
      }

    case actionTypes.INCREMENT:
      return {
        ...state,
        ...{ count: state.count + 1 }
      }

    case actionTypes.DECREMENT:
      return {
        ...state,
        ...{ count: state.count - 1 }
      }

    case actionTypes.RESET:
      return {
        ...state,
        ...{ count: initialState.count }
      }

    case actionTypes.TICK_CLOCK:
      return {
        ...state,
        ...{ lastUpdate: action.ts, light: !!action.light }
      }

    default:
      return state
  }
}
