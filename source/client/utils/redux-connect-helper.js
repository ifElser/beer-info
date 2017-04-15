'use strict';

import { connect } from 'react-redux';

function getPath (object, path) {
	path = path || '';
	path = path.split(".");
	console.log('path split:', path, object)
	let property, field, pointer = object;
	while(field = path.shift()) if(field && pointer[field]) {
		console.log('field:', field);
		pointer = pointer[field]
		property = field;
	}
	return { property, pointer };
}

export default function(storePath, actions){
	storePath = storePath || '';
	let mapStateToProps = null;
	if(typeof storePath === 'string') storePath = [storePath];
	if(storePath instanceof Array) {
		mapStateToProps = state => {
			let path, mappedState = { state: {} };
			while(path = storePath.shift()){
				let subState = getPath(state.state, path);
				console.log('path:', path, subState)
				mappedState.state[subState.property] = subState.pointer;
			}
			console.log('state:', state, mappedState)
			return mappedState;
		}
	}
	console.log('ACTIONS:',actions)
	return connect(
		mapStateToProps,
		dispatch => Object.keys(actions).reduce(
			(mappedActions, action) => {
				let acts = {
					...mappedActions,
					[action]: data => dispatch(actions[action](data))
				}
				console.log('actions:',acts);
				return acts;
			},
			{}
		)
	)
}
