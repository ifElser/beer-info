'use strict';

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { combineReducers } from 'redux';
import { connect, Provider } from 'react-redux';

import { createStore, renderDevTools } from './utils/dev-tools';

import state from './state'

import * as reducers from './reducers';
import actions from './actions/app'

import C from 'classnames'

import css from './app.scss'

const reducer = combineReducers(reducers);
const store = createStore(reducer);

store.dispatch({ type: 'SET_STATE', state });

class App extends Component {

	constructor(props) {
		super(props);
	}

	static propTypes = {
		store: React.PropTypes.object
	}

	render() {
		return (
			<Provider store={store}>
				<div>App</div>
			</Provider>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('approot'));
export default App
