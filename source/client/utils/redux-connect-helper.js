'use strict';

import { connect } from 'react-redux';

function getPath (object, path) {
	path = path || '';
	path = path.split(".");
	let property, field, pointer = object;
	while(field = path.shift()) if(field && pointer[field]) {
		pointer = pointer[field]
		property = field;
	}
	return { property, pointer };
}

export default function(storePath, actions){
	if(typeof storePath === 'string') storePath = [storePath];
	return connect(
		storePath instanceof Array ? (state => {
			let path, mappedState = {};
			while(path = storePath.shift()){
				let subState = getPath(state, path);
				mappedState[subState.property] = subState.pointer;
			}
			return mappedState;
		}) : null,
		dispatch => Object.keys(actions).reduce(
			(mappedActions, action) => ({
				...mappedActions,
				[action]: data => dispatch(actions[action](data))
			}),
			{}
		)
	)
}
