'use strict';

import 'react-hot-loader'
import React, { Component } from 'react'
// import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import C from 'classnames'

import css from './SearchPage.scss'

import actions from '../../actions/categories'

import UnderConstruction from '../../components/UnderConstruction'

// import SearchForm from './containers/search-form'
// import SearchResultsList from './containers/search-result-list'
// import SearchResultsDetailes from './containers/search-result-detailes'
// import BookmarksList from './containers/bookmarks-list'

// import MainLayout from './components/main-layout'

@connect(
    state => ({state}),
    dispatch => actions(dispatch)
)
class SearchPage extends Component {

  constructor(props) {
    super(props)
    console.log(props)
  }

  componentWillMount() {
    if(!this.props.state.categories.fetching){
      this.props.requestCategories()
    }
  }

  render() {
    let categories = this.props.state.categories;
    return <UnderConstruction />
    //   : <select>{
    //     categories.data && categories.data.length ? categories.data.map((category, key) => {
    //       return <option key={key} value={category.id}>{category.name}</option>
    //     }) : null
    //   }</select>
    // )
  }
}

export default SearchPage
