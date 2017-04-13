'use strict';

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'

import { combineReducers } from 'redux'
import { Provider } from 'react-redux'

import C from 'classnames'

// import { createStore, renderDevTools } from './utils/dev-tools';

import state from './state'
import * as reducers from './reducers'
import { ACTIONS } from './constants'

import css from './app.scss'

import Overlay from './containers/overlay'
import SearchForm from './containers/search-form'
import SearchResultsList from './containers/search-result-list'
import SearchResultsDetailes from './containers/search-result-detailes'
import BookmarksList from './containers/bookmarks-list'

import MainLayout from './components/main-layout'
import NoMatch from './components/404'

const reducer = combineReducers(reducers)
const store = createStore(reducer)

store.dispatch({
	type: ACTIONS.SET_STATE,
	state
})

class App extends Component {

	constructor(props) {
		super(props)
	}

	static propTypes = {
		store: React.PropTypes.object
	}

	render() {
		return (
			<Provider store={store}>
				<Router history={browserHistory}>
					<Route component={MainLayout} >
						<Route path="/" components={{
							header: SearchForm,
							main: SearchResultsList,
							right: BookmarksList,
							overlay: Overlay
						}} />
						<Route path="/:id" components={{
							main: SearchResultsDetailes,
							overlay: Overlay
						}} />
						{/*Not found 404 page*/}
						<Route path="*" components={{main: NoMatch}} />
					</Route>
				</Router>
				<div>App</div>
			</Provider>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('approot'))
export default App
