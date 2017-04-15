'use strict';

const initialState = {
      fetching: false,
      selected: null,
      data: []
}

const reducers = {

  CATEGORIES_SELECT: (state, data) => ({
    ...state,
    selected: data
  }),

  CATEGORIES_REQUEST: state => ({
    ...state,
    fetching: true
  }),

  CATEGORIES_RECEIVED (state, data = null) {
    if(data) return {
      ...state,
      fetching: false,
      data
    }
    return state;
  }

}

export default function (state = initialState, action) {
  return (reducers[action.type] || (state => state))(state, action.data)
}

