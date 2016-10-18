import React, { Component } from 'react';

export default class TodoItem extends Component {
	
	constructor(props){
		super(props);

	}

	render() {
		let {id, text} = this.props;

		return (
			<div>
				{id} - {text}
			</div>
		);
	}
}
