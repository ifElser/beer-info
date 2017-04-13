'use strict';

import 'react-hot-loader'
import React, { Component } from 'react'
import connect from '../../utils/redux-connect-helper'

/*import overlay components*/

import actions from '../../actions/overlay'

import css from './overlay.scss'

@connect('system.overlay', actions)
export default class Overlay extends Component {

	constructor(props) {
		super(props);
	}

	componentWillUpdate() {
		document.body.style.overflowY = this.props.state.component === 'off' ? 'auto' : 'hidden'
	}

	onClose(){
		this.props.overlay('off');
	}

	render(){
		let component = this.props.state.component;
		let overlay = {
			off: null
			/*overlay components*/
		}
		return (
			<div className={(component === 'off' ? css.overlayOff : css.overlayOn)}>
				<div>
					{overlay[component]}
					<div className={css.closeButton} onClick={this.onClose.bind(this)}>⮿</div>
				</div>
			</div>
        )
	}

}

