'use strict';

import { ACTIONS } from '../constants'

export default dispatch => (disp, state, store) => {
  console.log({disp, state, store})
  return {
    requestCategories: () => {
      dispatch({type: 'CATEGORIES_REQUEST'})
      fetch('http://terezanov.ru:8080/api/categories')
      .then(r => r.json())
      .then(json => {
        console.log(json)
        return dispatch({
          type: 'CATEGORIES_RECEIVED',
          data: json.data
        })
      })
    }
  }

};
