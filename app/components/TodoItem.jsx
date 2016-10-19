import React, { Component } from 'react';

export default class TodoItem extends Component {
	
	constructor(props){
		super(props);

	}

	render() {
		let {id, text, completed} = this.props;

		return (
			<div onClick={() => {
				this.props.onToggle(id);
			}}>
				<input type="checkbox" checked={completed}  />
				{text}
			</div>
		);
	}
}
