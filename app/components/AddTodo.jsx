import React, { Component } from 'react';

export default class AddTodo extends Component {

	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);	
	}
	
	handleSubmit(e){
		e.preventDefault();
		let todoText = this.refs.todoText.value;

		if (todoText.length > 0){
			this.refs.todoText.value = '';
			this.props.onAddTodo(todoText);	
		}else {
			this.refs.todoText.focus();
		}

	}

	render() {
		return (
			<div>
				<form ref="form" onSubmit={this.handleSubmit}>
					<input type="text" ref="todoText" placeholder="Enter what do you need to do" />
					<button className="button expanded">Add Todo</button>
				</form>
			</div>
		);
	}
}
