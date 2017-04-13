'use strict';

import { ACTIONS } from '../constants'

const actions = (dispatch, getState) => ({
	overlay(component) {
		dispatch({
			type: ACTIONS.OVERLAY,
			component
		})
	}
});
export default actions;
