import React from 'react'
import AMUIReact from 'amazeui-react'

import '../css/amazeui.min.css'

export default class DropdownItem extends React.Component {
	render() {
		var Dropdown = AMUIReact.Dropdown;
		return (
			<Dropdown.Item
				onClick={this.props.onClick}>
				快乐的方式不只一种
			</Dropdown.Item>
		);
	}
}

DropdownItem.propTypes = {
	onClick : React.PropTypes.func.isRequired
}