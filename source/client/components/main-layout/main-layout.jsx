'use strict';

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import c from 'classnames'

import css from './main-layout.scss'

export default class MainLayout extends Component {

	constructor(props) { super(props); }

	render(){
		let props = {
			header  : this.props.header  || null,
			left    : this.props.left    || null,
			main    : this.props.main    || null,
			right   : this.props.right   || null,
			footer  : this.props.footer  || null,
			overlay : this.props.overlay || null
		}
		return (
		    <div className={ css.wrapper }>
				<div className={ css.layout }>
					{ props.header }
					<div className={ css.content }>
						{ props.left  ? <div className={ c( css.side, css.left )}>{ props.left }</div> : null }
						{ props.main  ? <main className={ css.main }>{ props.main }</main> : null }
						{ props.right ? <div className={ c( css.side, css.right )}>{ props.right }</div> : null }
					</div>
				</div>
				{ props.footer }
				{ props.overlay }
			</div>
		)
	}

}

