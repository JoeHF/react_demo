import React from 'react'
import AMUIReact from 'amazeui-react'

import '../css/amazeui.min.css'

export default class DropdownItem extends React.Component {
	render() {
		var Dropdown = AMUIReact.Dropdown;
		return (
			<option
				value={this.props.currentNews}
				>
				{this.props.currentNews}
			</option>
		);
	}
}

DropdownItem.propTypes = {
	onChooseClick : React.PropTypes.func.isRequired,
	currentNews : React.PropTypes.string.isRequired
}