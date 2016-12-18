import React from 'react'
import AMUIReact from 'amazeui-react'

import '../css/amazeui.min.css'

export default class DropdownItem extends React.Component {
	render() {
		var Dropdown = AMUIReact.Dropdown;
		return (
			<Dropdown.Item
				onClick={this.props.onChooseClick(this.props.currentNews)}>
				{this.props.currentNews}
			</Dropdown.Item>
		);
	}
}

DropdownItem.propTypes = {
	onChooseClick : React.PropTypes.func.isRequired,
	currentNews : React.PropTypes.string.isRequired
}