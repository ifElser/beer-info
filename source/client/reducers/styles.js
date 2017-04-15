'use strict';

const initialState = {
    fetching: false,
    selected: null,
    data: []
}

const reducers = {

  STYLES_ADD_TO_BOOKMARKS: (state, data) => ({
    ...state,
    data: state.data.map(style => (style.id === data ? {...style, bookmarked: true} : style))
  }),

  STYLES_REMOVE_FROM_BOOKMARKS: (state, data) => ({
    ...state,
    data: state.data.map(style => (style.id === data ? {...style, bookmarked: false} : style))
  }),

  STYLES_REQUEST: state => ({
    ...state,
    fetching: true
  }),

  STYLES_RECEIVED (state, data = null) {
    if(!data) return state;
    return {
      ...state,
      fetching: false,
      data
    }
  }

}

export default function (state = initialState, action) {
  return (reducers[action.type] || (state => state))(state, action.data)
}
