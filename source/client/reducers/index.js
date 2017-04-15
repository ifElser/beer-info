'use strict';

import { combineReducers } from 'redux';

import categories from './categories';
import styles from './styles';

export default combineReducers({
  categories,
  styles
})
